"use client"

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  GitPullRequest,
  GitMerge,
  X,
  MessageSquare,
  FileText,
  GitCommit,
  CheckCircle2,
  AlertCircle,
  Clock,
  Users,
  Plus,
  Minus,
  Edit,
  Eye,
  MoreHorizontal
} from 'lucide-react'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton';
import CommentGutter from '@/components/comment-gutter';
import ProtocolDiff from '@/components/protocol-diff';
import { formatRelativeTime } from '@/lib/utils';
import { StatusRibbon } from '@/components/status-ribbon';

interface FileChange {
  filename: string
  status: 'added' | 'modified' | 'deleted'
  additions: number
  deletions: number
  patch: string
}

interface Commit {
  sha: string
  message: string
  author: string
  timestamp: string
}

interface Review {
  id: string
  reviewer: string
  status: 'approved' | 'changes_requested' | 'commented'
  timestamp: string
  comment: string
}

interface PullRequest {
  id: number
  title: string
  status: 'open' | 'merged' | 'closed'
  author: string
  assignee?: string
  reviewers: string[]
  createdAt: string
  updatedAt: string
  description: string
  commits: Commit[]
  fileChanges: FileChange[]
  reviews: Review[]
  labels: string[]
  branch: {
    from: string
    to: string
  }
  checks: {
    validation: 'pending' | 'success' | 'failure'
    simulation: 'pending' | 'success' | 'failure'
    compliance: 'pending' | 'success' | 'failure'
  }
  mergeable: boolean
  repoHash: string
}

// Mock data
const pullRequest: PullRequest = {
  id: 12,
  title: "Add Japan sites to protocol",
  status: "open",
  author: "Dr. Tanaka",
  assignee: "Dr. Johnson",
  reviewers: ["Dr. Chen", "Regulatory Team"],
  createdAt: "2024-01-20T10:00:00Z",
  updatedAt: "2024-01-20T15:30:00Z",
  description: `## Summary
Adding 3 additional sites in Japan for Phase II expansion to increase enrollment capacity and geographic diversity.

## Changes Made
- Updated protocol to include Japan sites
- Added Japanese informed consent translations
- Updated regulatory documentation for PMDA submission
- Added site contact information and principal investigators

## Regulatory Impact
- PMDA notification required
- Local ethics committee approvals needed
- Site training and qualification required

## Testing
- [x] Protocol validation passes
- [x] Compliance checks pass
- [ ] Simulation with expanded enrollment
- [ ] Translation review complete`,
  commits: [
    {
      sha: "a1b2c3d",
      message: "Add Japan site information to protocol",
      author: "Dr. Tanaka",
      timestamp: "2024-01-20T10:00:00Z"
    },
    {
      sha: "e4f5g6h", 
      message: "Update informed consent with Japanese translation",
      author: "Dr. Tanaka",
      timestamp: "2024-01-20T12:30:00Z"
    },
    {
      sha: "i7j8k9l",
      message: "Add regulatory documentation for PMDA",
      author: "Regulatory Team",
      timestamp: "2024-01-20T15:30:00Z"
    }
  ],
  fileChanges: [
    {
      filename: "protocol/main_protocol.yaml",
      status: "modified",
      additions: 45,
      deletions: 3,
      patch: `@@ -120,7 +120,7 @@ sites:
   - name: "Memorial Sloan Kettering"
     country: "United States"
     pi: "Dr. Sarah Johnson"
+  - name: "National Cancer Center Japan"
+    country: "Japan" 
+    pi: "Dr. Hiroshi Yamamoto"`
    },
    {
      filename: "documents/informed_consent_jp.pdf",
      status: "added",
      additions: 0,
      deletions: 0,
      patch: "Binary file added"
    },
    {
      filename: "regulatory/pmda_submission.yaml",
      status: "added",
      additions: 67,
      deletions: 0,
      patch: `+regulatory_submission:
+  authority: "PMDA"
+  country: "Japan"
+  submission_type: "Clinical Trial Notification"`
    }
  ],
  reviews: [
    {
      id: "r1",
      reviewer: "Dr. Chen",
      status: "approved",
      timestamp: "2024-01-20T14:00:00Z",
      comment: "Changes look good. The site information is complete and the PI qualifications are excellent."
    },
    {
      id: "r2", 
      reviewer: "Regulatory Team",
      status: "changes_requested",
      timestamp: "2024-01-20T15:45:00Z",
      comment: "Please add PMDA notification timeline and update the regulatory contact information."
    }
  ],
  labels: ["amendment", "sites", "international", "pmda"],
  branch: { from: "feature/japan-sites", to: "main" },
  checks: {
    validation: "success",
    simulation: "pending", 
    compliance: "success"
  },
  mergeable: false,
  repoHash: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0'
}

const statusColors = {
  open: 'text-green-600 bg-green-100',
  merged: 'text-purple-600 bg-purple-100',
  closed: 'text-gray-600 bg-gray-100'
}

const reviewStatusColors = {
  approved: 'text-green-600 bg-green-100',
  changes_requested: 'text-red-600 bg-red-100',
  commented: 'text-blue-600 bg-blue-100'
}

export default function PullRequestDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("commits")
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  const handleHashCopy = () => {
    navigator.clipboard.writeText(pullRequest.repoHash);
    // Add a toast notification here to inform the user
  };


  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <GitPullRequest className="w-6 h-6 text-green-500" />
      case 'merged':
        return <GitMerge className="w-6 h-6 text-purple-500" />
      case 'closed':
        return <X className="w-6 h-6 text-red-500" />
    }
  }

  const getCheckIcon = (status: 'pending' | 'success' | 'failure') => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />
      case 'failure':
        return <AlertCircle className="w-4 h-4 text-red-500" />
    }
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton className="h-4 w-1/4 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link href="/pull-requests" className="hover:text-gray-700">Pull Requests</Link>
        <span>/</span>
        <span>#{pullRequest.id}</span>
        <span
          className="cursor-pointer hover:text-gray-900"
          onClick={handleHashCopy}
          title="Copy full hash to clipboard"
        >
          ({pullRequest.repoHash.slice(0, 8)})
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <StatusRibbon
            power={0.83}
            diversity="Gold"
            part11Status="Signed"
            twinAUC={0.78}
          />
          {/* PR Header */}


          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="commits">
                <GitCommit className="w-4 h-4 mr-2" />
                Commits ({pullRequest.commits.length})
              </TabsTrigger>
              <TabsTrigger value="files">
                <FileText className="w-4 h-4 mr-2" />
                Files changed ({pullRequest.fileChanges.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="commits" className="space-y-4">
              {pullRequest.commits.map((commit) => (
                <div key={commit.sha} className="bg-white rounded-lg border p-4">
                  <div className="flex items-center space-x-3">
                    <GitCommit className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{commit.message}</div>
                      <div className="text-sm text-gray-500">
                        {commit.author} committed {formatRelativeTime(commit.timestamp)}
                      </div>
                    </div>
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {commit.sha}
                    </code>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="files" className="space-y-4">
              {pullRequest.fileChanges.filter(file => file.filename.includes('protocol.yaml')).map((file, index) => (
                <div key={index} className="bg-white rounded-lg border">
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{file.filename}</span>
                      <Badge variant={
                        file.status === 'added' ? 'success' :
                        file.status === 'deleted' ? 'destructive' : 'secondary'
                      }>
                        {file.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      {file.additions > 0 && (
                        <span className="text-green-600">+{file.additions}</span>
                      )}
                      {file.deletions > 0 && (
                        <span className="text-red-600">-{file.deletions}</span>
                      )}
                    </div>
                  </div>
                  {file.patch && <ProtocolDiff patch={file.patch} oldProtocol="" newProtocol="" />}
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Comment Gutter */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border">
            <CommentGutter comments={[]} />
          </div>
        </div>
      </div>
    </div>
  )
}