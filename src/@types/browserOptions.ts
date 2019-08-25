export interface BrowserOptions {
  headless?: boolean
  timeout?: number
  executablePath?: string
  emulateNetworkConditions?: boolean
  offline?: boolean
  latency?: number
  downloadThroughput?: number
  uploadThroughput?: number
  connectionType?: string
  emulateCpuThrottling?: boolean
  cpuThrottlingRate?: number
}
