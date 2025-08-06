"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield,
  Plus,
  Star,
  GitFork,
  Clock,
  TrendingUp,
  Users,
  Activity,
  Bell,
  BookOpen,
  BarChart3,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import { formatRelativeTime } from '@/lib/utils'

const recentTrials = [
  {
    name: "CTP-ABC123",
    title: "NSCLC Phase I Safety Trial",
    owner: "oncology-research",
    status: "Active",
    lastUpdated: "2024-01-20T15:30:00Z",
    stars: 23,
    language: "YAML"
  },
  {
    name: "CTP-XYZ789", 
    title: "CAR-T Optimization Study",
    owner: "oncology-research",
    status: "Planning",
    lastUpdated: "2024-01-18T09:45:00Z",
    stars: 15,
    language: "YAML"
  }
]

const recentActivity = [
  {
    type: "pr_merged",
    title: "Dr. Chen merged pull request #12",
    description: "Add Japan sites to protocol",
    timestamp: "2024-01-20T14:30:00Z",
    trial: "CTP-ABC123"
  },
  {
    type: "issue_opened",
    title: "Dr. Martinez opened issue #15",
    description: "Amendment request for biomarker collection",
    timestamp: "2024-01-20T11:45:00Z",
    trial: "CTP-ABC123"
  },
  {
    type: "safety_alert",
    title: "Safety alert: Grade 3 neutropenia reported",
    description: "Patient CTP-019 at Memorial Sloan Kettering",
    timestamp: "2024-01-20T09:15:00Z",
    trial: "CTP-ABC123"
  }
]

const watchingTrials = [
  {
    name: "CTP-DEF456",
    title: "Breast Cancer Phase II Study",
    owner: "breast-cancer-consortium",
    activity: "3 new commits",
    timestamp: "2024-01-20T12:00:00Z"
  },
  {
    name: "CTP-GHI789",
    title: "Pediatric Oncology Trial",
    owner: "pediatric-oncology", 
    activity: "Issue #8 opened",
    timestamp: "2024-01-19T16:30:00Z"
  }
]

const upcomingDeadlines = [
  {
    type: "regulatory",
    title: "FDA SAE report due",
    description: "Grade 3 neutropenia - 24 hour deadline",
    dueDate: "2024-01-21T16:30:00Z",
    priority: "critical"
  },
  {
    type: "amendment",
    title: "IRB amendment review",
    description: "Biomarker collection protocol",
    dueDate: "2024-01-25T17:00:00Z",
    priority: "high"
  },
  {
    type: "enrollment",
    title: "Monthly enrollment report",
    description: "All active trials",
    dueDate: "2024-01-31T23:59:00Z",
    priority: "medium"
  }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-lg border p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Good morning, Dr. Johnson!</h1>
              <p className="text-gray-600 mt-1">Here's what's happening with your trials today.</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Bell className="w-4 h-4 mr-2" />
                View all notifications
              </Button>
              <Link href="/new/trial">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New trial
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Recent activity</h2>
                  <Link href="/activity" className="text-blue-600 hover:text-blue-800 text-sm">
                    View all →
                  </Link>
                </div>
              </div>
              <div className="divide-y">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {activity.type === 'safety_alert' ? (
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                        ) : activity.type === 'pr_merged' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Activity className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{activity.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{formatRelativeTime(activity.timestamp)}</span>
                          {activity.trial && (
                            <>
                              <span>in</span>
                              <Link
                                href={`/${activity.trial.toLowerCase()}`}
                                className="text-blue-600 hover:underline"
                              >
                                {activity.trial}
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Trials */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Your trials</h2>
                  <Link href="/trials" className="text-blue-600 hover:text-blue-800 text-sm">
                    View all →
                  </Link>
                </div>
              </div>
              <div className="divide-y">
                {recentTrials.map((trial, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Link
                            href={`/${trial.name.toLowerCase()}`}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            {trial.owner}/{trial.name}
                          </Link>
                          <Badge 
                            variant={trial.status === 'Active' ? 'success' : 'secondary'}
                            className="text-xs"
                          >
                            {trial.status}
                          </Badge>
                        </div>
                        <h3 className="text-gray-900 mb-1">{trial.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{trial.language}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>{trial.stars}</span>
                          </div>
                          <span>Updated {formatRelativeTime(trial.lastUpdated)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <BarChart3 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <h3 className="font-semibold text-gray-900">Upcoming deadlines</h3>
              </div>
              <div className="divide-y">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {deadline.priority === 'critical' ? (
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                        ) : deadline.priority === 'high' ? (
                          <Clock className="w-4 h-4 text-orange-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{deadline.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{deadline.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Due {formatRelativeTime(deadline.dueDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Watching */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <h3 className="font-semibold text-gray-900">Watching</h3>
              </div>
              <div className="divide-y">
                {watchingTrials.map((trial, index) => (
                  <div key={index} className="p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-4 h-4 text-gray-400 mt-1" />
                      <div className="flex-1">
                        <Link
                          href={`/${trial.name.toLowerCase()}`}
                          className="font-medium text-gray-900 text-sm hover:text-blue-600"
                        >
                          {trial.owner}/{trial.name}
                        </Link>
                        <p className="text-xs text-gray-600 mt-1">{trial.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {trial.activity} • {formatRelativeTime(trial.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick actions</h3>
              <div className="space-y-2">
                <Link href="/new/trial" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    New trial
                  </Button>
                </Link>
                <Link href="/issues/new" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Report issue
                  </Button>
                </Link>
                <Link href="/wiki" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Browse wiki
                  </Button>
                </Link>
                <Link href="/organizations" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Explore organizations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}