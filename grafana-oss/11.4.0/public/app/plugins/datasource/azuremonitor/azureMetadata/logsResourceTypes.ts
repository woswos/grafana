/**
This list is obtained parsing https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/resource-logs-categories
To programatically get the list, execute in the browser console:
 
  const namespaces = []
  document.querySelectorAll('tr').forEach((tr, index) => {
      if(index !== 0) {
          const tds = tr.cells
          const resourceProvider = tds[0].innerText.replace("\n", "")
          if(tds[2].innerText === "N/A" || !resourceProvider.match(/^(microsoft|Microsoft|Wandisco)/)) {
              return;
          }
          const logsCategories = tds[2].innerText.split("\n")
          logsCategories.forEach((category) => {
              if(category === "") {
                  return;
              }
              const string =resourceProvider+'/'+category
              namespaces.push(string.toLowerCase())
          })
      }
  })
  namespaces;
 
Note: Validate that the output makes sense, the format of the page may change.
 
That list is not complete so we should merge it with the one below. You can do with a node console:
 
  const u = require('lodash')
  const newList = [list from above]
  const logsResourceTypes = [this list]
  console.dir(u.uniq(logsResourceTypes.concat(newList)).sort(), {'maxArrayLength': null})
 
 */

export const logsResourceTypes = [
  'microsoft.aad/domainservices',
  'microsoft.aadiam/azureadmetrics',
  'microsoft.aadiam/tenants',
  'microsoft.agfoodplatform/farmbeats',
  'microsoft.analysisservices/servers',
  'microsoft.apimanagement/service',
  'microsoft.app/managedenvironments',
  'microsoft.appconfiguration/configurationstores',
  'microsoft.appplatform/spring',
  'microsoft.attestation/attestationproviders',
  'microsoft.automation/automationaccounts',
  'microsoft.autonomousdevelopmentplatform/accounts',
  'microsoft.autonomousdevelopmentplatform/datapools',
  'microsoft.autonomousdevelopmentplatform/workspaces',
  'microsoft.avs/privateclouds',
  'microsoft.azuredatatransfer/connections/flows',
  'microsoft.azureplaywrightservice/accounts',
  'microsoft.azuresphere/catalogs',
  'microsoft.azurestackresourcemonitor/storageaccountmonitor',
  'microsoft.batch/batchaccounts',
  'microsoft.batchai/workspaces',
  'microsoft.blockchain/blockchainmembers',
  'microsoft.blockchain/cordamembers',
  'microsoft.botservice/botservices',
  'microsoft.cache/redis',
  'microsoft.cache/redisenterprise',
  'microsoft.cache/redisenterprise/databases',
  'microsoft.cdn/cdnwebapplicationfirewallpolicies',
  'microsoft.cdn/profiles',
  'microsoft.cdn/profiles/endpoints',
  'microsoft.chaos/experiments',
  'microsoft.classiccompute/domainnames',
  'microsoft.classiccompute/virtualmachines',
  'microsoft.classicnetwork/networksecuritygroups',
  'microsoft.classicstorage/storageaccounts',
  'microsoft.codesigning/codesigningaccounts',
  'microsoft.cognitiveservices/accounts',
  'microsoft.communication/communicationservices',
  'microsoft.community/communitytrainings',
  'microsoft.compute/disks',
  'microsoft.compute/virtualmachines',
  'microsoft.compute/virtualmachinescalesets',
  'microsoft.confidentialledger/managedccf',
  'microsoft.confidentialledger/managedccfs',
  'microsoft.connectedcache/cachenodes',
  'microsoft.connectedcache/enterprisemcccustomers',
  'microsoft.connectedcache/ispcustomers',
  'microsoft.connectedvehicle/platformaccounts',
  'microsoft.containerinstance/containergroups',
  'microsoft.containerregistry/registries',
  'microsoft.containerservice/fleets',
  'microsoft.containerservice/managedclusters',
  'microsoft.customerinsights/hubs',
  'microsoft.customproviders/resourceproviders',
  'microsoft.d365customerinsights/instances',
  'microsoft.dashboard/grafana',
  'microsoft.databoxedge/databoxedgedevices',
  'microsoft.databricks/workspaces',
  'microsoft.datacollaboration/workspaces',
  'microsoft.datafactory/datafactories',
  'microsoft.datafactory/factories',
  'microsoft.datalakeanalytics/accounts',
  'microsoft.datalakestore/accounts',
  'microsoft.dataprotection/backupvaults',
  'microsoft.datashare/accounts',
  'microsoft.dbformariadb/servers',
  'microsoft.dbformysql/flexibleservers',
  'microsoft.dbformysql/servers',
  'microsoft.dbforpostgresql/flexibleservers',
  'microsoft.dbforpostgresql/servergroupsv2',
  'microsoft.dbforpostgresql/servers',
  'microsoft.dbforpostgresql/serversv2',
  'microsoft.desktopvirtualization/appattachpackages',
  'microsoft.desktopvirtualization/applicationgroups',
  'microsoft.desktopvirtualization/hostpools',
  'microsoft.desktopvirtualization/scalingplans',
  'microsoft.desktopvirtualization/workspaces',
  'microsoft.devcenter/devcenters',
  'microsoft.devices/elasticpools/iothubtenants',
  'microsoft.devices/iothubs',
  'microsoft.devices/provisioningservices',
  'microsoft.devopsinfrastructure/pools',
  'microsoft.digitaltwins/digitaltwinsinstances',
  'microsoft.documentdb/cassandraclusters',
  'microsoft.documentdb/databaseaccounts',
  'microsoft.documentdb/mongoclusters',
  'microsoft.eventgrid/domains',
  'microsoft.eventgrid/namespaces',
  'microsoft.eventgrid/partnernamespaces',
  'microsoft.eventgrid/partnertopics',
  'microsoft.eventgrid/systemtopics',
  'microsoft.eventgrid/topics',
  'microsoft.eventhub/clusters',
  'microsoft.eventhub/namespaces',
  'microsoft.experimentation/experimentworkspaces',
  'microsoft.fabric.admin/fabriclocations',
  'microsoft.hardwaresecuritymodules/cloudhsmclusters',
  'microsoft.hdinsight/clusters',
  'microsoft.healthcareapis/services',
  'microsoft.healthcareapis/workspaces/dicomservices',
  'microsoft.healthcareapis/workspaces/fhirservices',
  'microsoft.healthcareapis/workspaces/iotconnectors',
  'microsoft.healthdataaiservices/deidservices',
  'microsoft.insights/autoscalesettings',
  'microsoft.insights/components',
  'microsoft.insights/datacollectionrules',
  'microsoft.insights/qos',
  'microsoft.iotcentral/iotapps',
  'microsoft.keyvault/managedhsms',
  'microsoft.keyvault/vaults',
  'microsoft.kubernetes/connectedclusters',
  'microsoft.kusto/clusters',
  'microsoft.loadtestservice/loadtests',
  'microsoft.logic/integrationaccounts',
  'microsoft.logic/integrationserviceenvironments',
  'microsoft.logic/workflows',
  'microsoft.machinelearningservices/registries',
  'microsoft.machinelearningservices/workspaces',
  'microsoft.machinelearningservices/workspaces/onlineendpoints',
  'microsoft.managednetworkfabric/networkdevices',
  'microsoft.media/mediaservices',
  'microsoft.media/mediaservices/liveevents',
  'microsoft.media/mediaservices/streamingendpoints',
  'microsoft.media/videoanalyzers',
  'microsoft.monitor/accounts',
  'microsoft.netapp/netappaccounts/capacitypools',
  'microsoft.netapp/netappaccounts/capacitypools/volumes',
  'microsoft.network/applicationgateways',
  'microsoft.network/azurefirewalls',
  'microsoft.network/bastionhosts',
  'microsoft.network/connections',
  'microsoft.network/dnsresolverpolicies',
  'microsoft.network/dnszones',
  'microsoft.network/expressroutecircuits',
  'microsoft.network/expressroutegateways',
  'microsoft.network/expressrouteports',
  'microsoft.network/frontdoors',
  'microsoft.network/loadbalancers',
  'microsoft.network/natgateways',
  'microsoft.network/networkinterfaces',
  'microsoft.network/networkmanagers',
  'microsoft.network/networkmanagers/ipampools',
  'microsoft.network/networksecuritygroups',
  'microsoft.network/networksecurityperimeters',
  'microsoft.network/networksecurityperimeters/profiles',
  'microsoft.network/networkvirtualappliances',
  'microsoft.network/networkwatchers',
  'microsoft.network/networkwatchers/connectionmonitors',
  'microsoft.network/p2svpngateways',
  'microsoft.network/privateendpoints',
  'microsoft.network/privatelinkservices',
  'microsoft.network/publicipaddresses',
  'microsoft.network/publicipprefixes',
  'microsoft.network/trafficmanagerprofiles',
  'microsoft.network/virtualnetworkgateways',
  'microsoft.network/virtualnetworks',
  'microsoft.network/vpngateways',
  'microsoft.networkanalytics/dataproducts',
  'microsoft.networkcloud/baremetalmachines',
  'microsoft.networkcloud/clustermanagers',
  'microsoft.networkcloud/clusters',
  'microsoft.networkcloud/storageappliances',
  'microsoft.networkfunction/azuretrafficcollectors',
  'microsoft.notificationhubs/namespaces',
  'microsoft.notificationhubs/namespaces/notificationhubs',
  'microsoft.openlogisticsplatform/workspaces',
  'microsoft.operationalinsights/workspaces',
  'microsoft.operationsmanagement/solutions',
  'microsoft.peering/peeringservices',
  'microsoft.playfab/titles',
  'microsoft.powerbi/tenants',
  'microsoft.powerbi/tenants/workspaces',
  'microsoft.powerbidedicated/capacities',
  'microsoft.providerhub/providerregistrations',
  'microsoft.purview/accounts',
  'microsoft.recoveryservices/vaults',
  'microsoft.relay/namespaces',
  'microsoft.resources/subscriptions',
  'microsoft.resources/subscriptions/resourcegroups',
  'microsoft.search/searchservices',
  'microsoft.security/antimalwaresettings',
  'microsoft.security/defenderforstoragesettings',
  'microsoft.securityinsights/settings',
  'microsoft.servicebus/namespaces',
  'microsoft.servicenetworking/trafficcontrollers',
  'microsoft.signalrservice/signalr',
  'microsoft.signalrservice/signalr/replicas',
  'microsoft.signalrservice/webpubsub',
  'microsoft.signalrservice/webpubsub/replicas',
  'microsoft.singularity/accounts',
  'microsoft.sql/managedinstances',
  'microsoft.sql/managedinstances/databases',
  'microsoft.sql/servers/databases',
  'microsoft.sql/servers/elasticpools',
  'microsoft.storage/storageaccounts',
  'microsoft.storage/storageaccounts/blobservices',
  'microsoft.storage/storageaccounts/fileservices',
  'microsoft.storage/storageaccounts/queueservices',
  'microsoft.storage/storageaccounts/tableservices',
  'microsoft.storagecache/amlfilesystems',
  'microsoft.storagecache/caches',
  'microsoft.storagemover/storagemovers',
  'microsoft.storagesync/storagesyncservices',
  'microsoft.streamanalytics/streamingjobs',
  'microsoft.synapse/workspaces',
  'microsoft.synapse/workspaces/bigdatapools',
  'microsoft.synapse/workspaces/kustopools',
  'microsoft.synapse/workspaces/scopepools',
  'microsoft.synapse/workspaces/sqlpools',
  'microsoft.timeseriesinsights/environments',
  'microsoft.timeseriesinsights/environments/eventsources',
  'microsoft.videoindexer/accounts',
  'microsoft.vmwarecloudsimple/virtualmachines',
  'microsoft.web/hostingenvironments',
  'microsoft.web/hostingenvironments/workerpools',
  'microsoft.web/serverfarms',
  'microsoft.web/sites',
  'microsoft.web/sites/slots',
  'microsoft.web/staticsites',
  'microsoft.workloads/sapvirtualinstances',
];
