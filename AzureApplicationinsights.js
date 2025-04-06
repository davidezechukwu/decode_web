let applicationinsights = require('applicationinsights')
applicationinsights
    // eslint-disable-next-line no-undef
    .setup(`InstrumentationKey=YourKey;IngestionEndpoint=https://uksouth-1.in.applicationinsights.azure.com/;LiveEndpoint=https://uksouth.livediagnostics.monitor.azure.com/`)
    .setAutoCollectConsole(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectHeartbeat(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectRequests(true)
    .setAutoDependencyCorrelation(true)
    .setDistributedTracingMode(applicationinsights.DistributedTracingModes.AI_AND_W3C)
    .setSendLiveMetrics(true)
    .setUseDiskRetryCaching(true)

applicationinsights.start()
