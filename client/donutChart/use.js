 var SummeryResult_o = [
            {
                url: 'www.ynet.com',
                connection: 'FIOS',
                results: {
                    'US-West': {
                        'chrome': [
                            {users: 334, firstViewLoadTime: 2242},
                            {users: 0, firstViewLoadTime: 1121}
                        ],
                        'ie': [
                            {users: 334, firstViewLoadTime: 4552},
                            {users: 0, firstViewLoadTime: 1224}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 6877},
                            {users: 0, firstViewLoadTime: 254}
                        ]
                    },
                    'US-East': {
                        'chrome': [
                            {users: 334, firstViewLoadTime: 4554},
                            {users: 0, firstViewLoadTime: 1000}
                        ],
                        'ie': [
                            {users: 334, firstViewLoadTime: 4521},
                            {users: 0, firstViewLoadTime: 452}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 9745},
                            {users: 0, firstViewLoadTime: 5202}
                        ]
                    },
                    'Tokyo': {
                        'chrome': [
                            {users: 334, firstViewLoadTime: 5644},
                            {users: 0, firstViewLoadTime: 554}
                        ],
                        'ie': [
                            {users: 334, firstViewLoadTime: 4434},
                            {users: 0, firstViewLoadTime: 1500}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 1334},
                            {users: 0, firstViewLoadTime: 402}
                        ]
                    },
                    'Gotham': {
                        'chrome': [
                            {users: 334, firstViewLoadTime: 5654},
                            {users: 0, firstViewLoadTime: 1554}
                        ],
                        'ie': [
                            {users: 334, firstViewLoadTime: 6434},
                            {users: 0, firstViewLoadTime: 944}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 2334},
                            {users: 0, firstViewLoadTime: 1444}
                        ]
                    }
                }
            },
            {
                url: 'www.hp.com/www',
                connection: 'Native',
                results: {
                    'US-West': {

                        'ie': [
                            {users: 334, firstViewLoadTime: 3330},
                            {users: 0, firstViewLoadTime: 2220}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 3300},
                            {users: 0, firstViewLoadTime: 2200}
                        ]
                    },
                    'US-East': {
                        'chrome': [
                            {users: 334, firstViewLoadTime: 3001},
                            {users: 0, firstViewLoadTime: 2001}
                        ],
                        'ie': [
                            {users: 334, firstViewLoadTime: 2999},
                            {users: 0, firstViewLoadTime: 1999}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 9735},
                            {users: 0, firstViewLoadTime: 5202}
                        ]
                    },
                    'Tokyo': {
                        'chrome': [
                            {users: 334, firstViewLoadTime: 5644},
                            {users: 0, firstViewLoadTime: 554}
                        ],
                        'ie': [
                            {users: 334, firstViewLoadTime: 4434},
                            {users: 0, firstViewLoadTime: 544}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 1334},
                            {users: 0, firstViewLoadTime: 444}
                        ]
                    },
                    'Gotham': {
                        'chrome': [
                            {users: 334, firstViewLoadTime: 3009},
                            {users: 0, firstViewLoadTime: 2009}
                        ],
                        'ie': [
                            {users: 334, firstViewLoadTime: 2888},
                            {users: 0, firstViewLoadTime: 1888}
                        ],
                        'firefox': [
                            {users: 334, firstViewLoadTime: 9745},
                            {users: 0, firstViewLoadTime: 5202}
                        ]
                    }
                }
            }
        ];
        var SummeryResult;
        SummeryResult = [
            {
                count: 1,
                time_stamp: 365000,
                geo_location: 'aws-us-east-1',
                browser: 'Internet Explorer',
                url: 'http://imgur.com',
                connection: 'Native',
                load_time: 4434,
                client_test_id: '141224_4E_2'
            },
            {
                'count': 11,
                'time_stamp': 430000,
                'geo_location': 'aws-us-east-1',
                'browser': 'Google Chrome',
                'url': 'http://imgur.com',
                'connection': 'Native',
                'load_time': 6571,
                'client_test_id': '141224_3Z_3'
            },
            {
                count: 12,
                time_stamp: 365000,
                geo_location: 'aws-us-west-2',
                browser: 'Internet Explorer',
                url: 'http://imgur.com',
                connection: 'Native',
                load_time: 4434,
                client_test_id: '141224_4E_2'
            },
            {
                'count': 10,
                'time_stamp': 430000,
                'geo_location': 'aws-us-west-2',
                'browser': 'Google Chrome',
                'url': 'http://imgur.com',
                'connection': 'Native',
                'load_time': 6571,
                'client_test_id': '141224_3Z_3'
            },
            
            {
                count: 1,
                time_stamp: 365000,
                geo_location: 'aws-us-east-1',
                browser: 'Internet Explorer',
                url: 'http://imgur2.com',
                connection: 'Native',
                load_time: 4434,
                client_test_id: '141224_4E_2'
            },
            {
                'count': 1,
                'time_stamp': 430000,
                'geo_location': 'aws-us-east-1',
                'browser': 'Google Chrome',
                'url': 'http://imgur2.com',
                'connection': 'Native',
                'load_time': 6571,
                'client_test_id': '141224_3Z_3'
            }
        ];
        
        
      function _doJson(){
          
          
          SummeryResult;
          //group by url 
          var urlsObj = _.groupBy(SummeryResult, 'url');
        //create new json  
        var newJson = [];
        var urlNameArr = _.keys(urlsObj);
        for(var i = 0; i < urlNameArr.length; i++){
            
                   newJson[i] = {
                       url: urlNameArr[i],
                       connection:urlsObj[urlNameArr[i]][0].connection,
                       
                   } 
                   
                  //collect geo location
                  var geoJson = {};
                  var geo_objects = _.groupBy(urlsObj[urlNameArr[i]], 'geo_location');
                  var geoNameArr = _.keys(geo_objects); 
                   for(var j = 0; j < geoNameArr.length; j++){
                       
                       
                       geoJson[geoNameArr[j]] = addBrowserJson(geo_objects[geoNameArr[j]]);
                        
                       
                   }
                newJson[i].results = geoJson; 
                
                console.log('dd', JSON.parse(newJson[i]) );
                    
        }
        
      } 
        
        
    var addBrowserJson = function(Obj){
        var browserJson = _.groupBy(Obj, 'browser');
        for(k in browserJson){
            for(var m = 0; m < browserJson[k].length; m++){           
                browserJson[k][m] =  _.pick(browserJson[k][m], 'client_test_id', 'count', 'load_time', 'time_stamp' );
            }
        }
        console.log('addBrowserJson',browserJson);
        return browserJson;
    }