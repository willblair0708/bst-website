"use client"

import { Badge } from "./ui/badge"
import { motion } from "framer-motion"

const connectors = [
  { id: "openfda", name: "OpenFDA", status: "live", lastSync: "2m ago" },
  { id: "ctgov", name: "ClinicalTrials.gov", status: "live", lastSync: "15m ago" },
  { id: "gap", name: "NIH dbGaP", status: "degraded", lastSync: "4h ago" },
  { id: "ctis", name: "EMA CTIS", status: "live", lastSync: "8m ago" },
  { id: "fhir", name: "EHR FHIR", status: "live", lastSync: "1m ago" },
]

const statusToState = {
  live: "pass" as const,
  degraded: "warn" as const,
  stale: "fail" as const,
}

export function ConnectorStatus() {
  return (
    <div className="space-y-4">
      <h3 className="text-heading-m text-foreground">Federation Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {connectors.map((connector, index) => (
          <motion.div
            key={connector.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg border border-grey-700 bg-grey-800/50 hover:bg-grey-800 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-body-m font-medium">{connector.name}</span>
              <Badge 
                metric="status"
                value={connector.status}
                state={statusToState[connector.status as keyof typeof statusToState]}
              />
            </div>
            <div className="text-body-s text-grey-400">
              Last sync: {connector.lastSync}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}