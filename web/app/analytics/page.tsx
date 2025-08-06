"use client"

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  Clock,
  Target,
  MapPin,
  Zap,
  Download,
  RefreshCw,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Eye
} from 'lucide-react'

const enrollmentData = [
  { month: 'Jan', target: 6, actual: 4, projected: 4 },
  { month: 'Feb', target: 12, actual: 8, projected: 9 },
  { month: 'Mar', target: 18, actual: 14, projected: 15 },
  { month: 'Apr', target: 24, actual: 20, projected: 22 },
  { month: 'May', target: 30, actual: 24, projected: 28 },
  { month: 'Jun', target: 36, actual: 30, projected: 34 }
]

const siteMetrics = [
  { site: 'Memorial Sloan Kettering', enrolled: 8, target: 6, rate: '133%', status: 'ahead' },
  { site: 'Johns Hopkins', enrolled: 5, target: 6, rate: '83%', status: 'on-track' },
  { site: 'MD Anderson', enrolled: 4, target: 6, rate: '67%', status: 'behind' },
  { site: 'Mayo Clinic', enrolled: 7, target: 6, rate: '117%', status: 'ahead' },
  { site: 'Dana-Farber', enrolled: 0, target: 6, rate: '0%', status: 'delayed' }
]

const demographics = {
  age: {
    '18-30': 12,
    '31-50': 35,
    '51-65': 42,
    '65+': 11
  },
  gender: {
    'Female': 52,
    'Male': 48
  },
  ethnicity: {
    'White': 68,
    'Asian': 22,
    'Black': 6,
    'Hispanic': 3,
    'Other': 1
  }
}

const safetyMetrics = {
  totalAEs: 47,
  totalSAEs: 3,
  dltRate: 8.3,
  dropoutRate: 12.5,
  recentEvents: [
    { event: 'Grade 2 Fatigue', count: 12, trend: 'stable' },
    { event: 'Grade 1 Nausea', count: 8, trend: 'decreasing' },
    { event: 'Grade 2 Rash', count: 5, trend: 'stable' },
    { event: 'Grade 3 Neutropenia', count: 2, trend: 'increasing' }
  ]
}

const syntheticTwinMetrics = {
  totalTwins: 847,
  validationAccuracy: 94.2,
  lastGenerated: '2 hours ago',
  matchingCriteria: [
    { criteria: 'Age ± 2 years', accuracy: 98.5 },
    { criteria: 'Gender', accuracy: 100 },
    { criteria: 'Disease stage', accuracy: 92.1 },
    { criteria: 'Prior therapy', accuracy: 89.7 },
    { criteria: 'Biomarkers', accuracy: 87.3 }
  ]
}

export default function AnalyticsPage() {
  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const handleRefresh = async () => {
    setRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setRefreshing(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics & Insights</h1>
          <p className="text-gray-600 mt-1">Real-time trial metrics and predictive analytics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={`w-4 h-4 mr-1 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
          <Button size="sm">
            <Zap className="w-4 h-4 mr-1" />
            Run Simulation
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="synthetic">Synthetic Twins</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">Enrolled</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">24</div>
              <div className="text-sm text-green-600 flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>+2 this week</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-600">Enrollment Rate</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">67%</div>
              <div className="text-sm text-gray-500">of target (36)</div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-600">Power Analysis</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">94.2%</div>
              <div className="text-sm text-green-600">Excellent</div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-gray-600">Est. Completion</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">Dec 2024</div>
              <div className="text-sm text-gray-500">On schedule</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Patient CTP-024 enrolled at Johns Hopkins</span>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Synthetic twin simulation completed (n=50)</span>
                  <span className="text-xs text-gray-500">4 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">AE reported: Grade 2 fatigue (CTP-019)</span>
                  <span className="text-xs text-gray-500">6 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="enrollment" className="space-y-6">
          {/* Enrollment Chart */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Enrollment Progress</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Target</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Actual</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>Projected</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end space-x-4">
              {enrollmentData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex justify-center space-x-1 mb-2">
                    <div 
                      className="w-4 bg-blue-500 rounded-t"
                      style={{ height: `${(data.target / 36) * 200}px` }}
                    ></div>
                    <div 
                      className="w-4 bg-green-500 rounded-t"
                      style={{ height: `${(data.actual / 36) * 200}px` }}
                    ></div>
                    <div 
                      className="w-4 bg-yellow-500 rounded-t opacity-60"
                      style={{ height: `${(data.projected / 36) * 200}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Site Performance */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Site Performance</h2>
            </div>
            <div className="divide-y">
              {siteMetrics.map((site, index) => (
                <div key={index} className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{site.site}</div>
                      <div className="text-sm text-gray-500">
                        {site.enrolled}/{site.target} enrolled
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-medium">{site.rate}</div>
                      <div className="text-sm text-gray-500">of target</div>
                    </div>
                    <Badge 
                      variant={
                        site.status === 'ahead' ? 'success' :
                        site.status === 'on-track' ? 'info' :
                        site.status === 'behind' ? 'warning' : 'destructive'
                      }
                    >
                      {site.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="safety" className="space-y-6">
          {/* Safety Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{safetyMetrics.totalAEs}</div>
              <div className="text-sm text-gray-600">Total AEs</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{safetyMetrics.totalSAEs}</div>
              <div className="text-sm text-gray-600">Total SAEs</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{safetyMetrics.dltRate}%</div>
              <div className="text-sm text-gray-600">DLT Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{safetyMetrics.dropoutRate}%</div>
              <div className="text-sm text-gray-600">Dropout Rate</div>
            </div>
          </div>

          {/* Recent Safety Events */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Recent Safety Events</h2>
            </div>
            <div className="divide-y">
              {safetyMetrics.recentEvents.map((event, index) => (
                <div key={index} className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium">{event.event}</div>
                      <div className="text-sm text-gray-500">{event.count} occurrences</div>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      event.trend === 'stable' ? 'secondary' :
                      event.trend === 'decreasing' ? 'success' : 'warning'
                    }
                  >
                    {event.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Age Distribution */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
              <div className="space-y-3">
                {Object.entries(demographics.age).map(([range, percentage]) => (
                  <div key={range} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{range}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8">{percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gender Distribution */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
              <div className="space-y-3">
                {Object.entries(demographics.gender).map(([gender, percentage]) => (
                  <div key={gender} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{gender}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8">{percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethnicity Distribution */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Ethnicity Distribution</h3>
              <div className="space-y-3">
                {Object.entries(demographics.ethnicity).map(([ethnicity, percentage]) => (
                  <div key={ethnicity} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{ethnicity}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8">{percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="synthetic" className="space-y-6">
          {/* Synthetic Twin Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{syntheticTwinMetrics.totalTwins}</div>
              <div className="text-sm text-gray-600">Total Synthetic Twins</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{syntheticTwinMetrics.validationAccuracy}%</div>
              <div className="text-sm text-gray-600">Validation Accuracy</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">{syntheticTwinMetrics.lastGenerated}</div>
              <div className="text-sm text-gray-600">Last Generated</div>
            </div>
          </div>

          {/* Matching Criteria Accuracy */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Matching Criteria Accuracy</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {syntheticTwinMetrics.matchingCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{criteria.criteria}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${criteria.accuracy}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-12">{criteria.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}