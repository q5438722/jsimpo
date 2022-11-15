'use strict';
const _0x29a2 = [
    'Key',
    'Value',
    'array',
    'prefix',
    'suffix',
    'Name',
    'Rules',
    'S3Key',
    'DEEP_ARCHIVE',
    'INTELLIGENT_TIERING',
    'ONEZONE_IA',
    'STANDARD_IA',
    'StorageClass',
    'Minutes',
    'exports',
    'AccelerationStatus',
    'V_1',
    'Destination',
    'OutputSchemaVersion',
    'StorageClassAnalysis',
    '^[a-f0-9-]+$',
    'SSEAlgorithm',
    'ServerSideEncryptionConfiguration',
    '#/definitions/awsS3BucketName',
    'GET',
    'HEAD',
    'POST',
    'DELETE',
    'integer',
    'AllowedMethods',
    'CorsRules',
    'boolean',
    'All',
    'Current',
    'Daily',
    'Weekly',
    'Enabled',
    'IncludedObjectVersions',
    'ScheduleFrequency',
    'DaysAfterInitiation',
    'date-time',
    'GLACIER',
    'Status',
    'ExpirationDate',
    'ExpirationInDays',
    'NoncurrentVersionExpirationInDays',
    'NoncurrentVersionTransitions',
    'Transition',
    'map',
    '#/definitions/awsCfFunction',
    'Event',
    'Function',
    '^s3:',
    'Queue',
    'Topic',
    'GOVERNANCE',
    'Disabled',
    '^\x5cd{12}$',
    'ReplicaKmsKeyID',
    'OUTPOSTS',
    'REDUCED_REDUNDANCY',
    'STANDARD',
    'Bucket',
    'Account',
    'SseKmsEncryptedObjects',
    'Suspended',
    'http',
    'https',
    'RedirectRule',
    '1842vgjVfc',
    '566zGeveN',
    '743RXwpQP',
    '958559sQNFYh',
    '954877IDCckg',
    '20283BuWsDZ',
    '43FywlLl',
    '8202QGzVhD',
    '10DDcZnP',
    '59OQEbtF',
    '62588eCgZIs',
    '\x5cd{12}',
    '#/definitions/awsArn',
    'ORC',
    'BucketArn',
    'object',
    'string'
];
function _0x42ad(_0x2b588f, _0x57d68b) {
    return _0x42ad = function (_0x20355e, _0x3ae296) {
        _0x20355e = _0x20355e - (0x6be + -0x21 * -0xe6 + -0x2293 * 0x1);
        let _0x3175f7 = _0x29a2[_0x20355e];
        return _0x3175f7;
    }, _0x42ad(_0x2b588f, _0x57d68b);
}
const _0x31a490 = _0x42ad;
(function (_0xef1176, _0x651be4) {
    const _0x27972f = _0x42ad;
    while (!![]) {
        try {
            const _0x685b97 = -parseInt(_0x27972f(0x1d1)) + -parseInt(_0x27972f(0x1d2)) * parseInt(_0x27972f(0x1d3)) + -parseInt(_0x27972f(0x1d4)) + -parseInt(_0x27972f(0x1d5)) + parseInt(_0x27972f(0x1d6)) * -parseInt(_0x27972f(0x1d7)) + -parseInt(_0x27972f(0x1d8)) * -parseInt(_0x27972f(0x1d9)) + -parseInt(_0x27972f(0x1da)) * -parseInt(_0x27972f(0x1db));
            if (_0x685b97 === _0x651be4)
                break;
            else
                _0xef1176['push'](_0xef1176['shift']());
        } catch (_0x43a2ec) {
            _0xef1176['push'](_0xef1176['shift']());
        }
    }
}(_0x29a2, -0x9107e + -0x9b08 + -0x1 * -0x12514d));
const destination = {
        'type': 'object',
        'properties': {
            'BucketAccountId': {
                'type': 'string',
                'pattern': _0x31a490(0x1dc)
            },
            'BucketArn': { '$ref': _0x31a490(0x1dd) },
            'Format': {
                'enum': [
                    'CSV',
                    _0x31a490(0x1de),
                    'Parquet'
                ]
            },
            'Prefix': { 'type': 'string' }
        },
        'required': [
            _0x31a490(0x1df),
            'Format'
        ],
        'additionalProperties': ![]
    }, tagFilter = {
        'type': _0x31a490(0x1e0),
        'properties': {
            'Key': { 'type': _0x31a490(0x1e1) },
            'Value': { 'type': _0x31a490(0x1e1) }
        },
        'required': [
            _0x31a490(0x1e2),
            _0x31a490(0x1e3)
        ],
        'additionalProperties': ![]
    }, notificationFilter = {
        'type': 'object',
        'properties': {
            'S3Key': {
                'type': _0x31a490(0x1e0),
                'properties': {
                    'Rules': {
                        'type': _0x31a490(0x1e4),
                        'items': {
                            'type': _0x31a490(0x1e0),
                            'properties': {
                                'Name': {
                                    'enum': [
                                        _0x31a490(0x1e5),
                                        _0x31a490(0x1e6)
                                    ]
                                },
                                'Value': { 'type': _0x31a490(0x1e1) }
                            },
                            'required': [
                                _0x31a490(0x1e7),
                                _0x31a490(0x1e3)
                            ],
                            'additionalProperties': ![]
                        }
                    }
                },
                'required': [_0x31a490(0x1e8)],
                'additionalProperties': ![]
            }
        },
        'required': [_0x31a490(0x1e9)],
        'additionalProperties': ![]
    }, noncurrentVersionTransition = {
        'type': 'object',
        'properties': {
            'StorageClass': {
                'enum': [
                    _0x31a490(0x1ea),
                    'GLACIER',
                    _0x31a490(0x1eb),
                    _0x31a490(0x1ec),
                    _0x31a490(0x1ed)
                ]
            },
            'TransitionInDays': {
                'type': 'integer',
                'minimum': 0x0
            }
        },
        'required': [
            _0x31a490(0x1ee),
            'TransitionInDays'
        ],
        'additionalProperties': ![]
    }, replicationTimeValue = {
        'type': 'object',
        'properties': {
            'Minutes': {
                'type': 'integer',
                'minimum': 0x0
            }
        },
        'required': [_0x31a490(0x1ef)],
        'additionalProperties': ![]
    };
module[_0x31a490(0x1f0)] = {
    'type': _0x31a490(0x1e0),
    'properties': {
        'accelerateConfiguration': {
            'type': _0x31a490(0x1e0),
            'properties': {
                'AccelerationStatus': {
                    'enum': [
                        'Enabled',
                        'Suspended'
                    ]
                }
            },
            'required': [_0x31a490(0x1f1)],
            'additionalProperties': ![]
        },
        'accessControl': { 'type': _0x31a490(0x1e1) },
        'analyticsConfigurations': {
            'type': _0x31a490(0x1e4),
            'items': {
                'type': _0x31a490(0x1e0),
                'properties': {
                    'Id': { 'type': 'string' },
                    'Prefix': { 'type': 'string' },
                    'StorageClassAnalysis': {
                        'type': 'object',
                        'properties': {
                            'DataExport': {
                                'type': _0x31a490(0x1e0),
                                'properties': {
                                    'Destination': destination,
                                    'OutputSchemaVersion': { 'const': _0x31a490(0x1f2) }
                                },
                                'required': [
                                    _0x31a490(0x1f3),
                                    _0x31a490(0x1f4)
                                ],
                                'additionalProperties': ![]
                            }
                        },
                        'additionalProperties': ![]
                    },
                    'TagFilters': {
                        'type': _0x31a490(0x1e4),
                        'items': tagFilter
                    }
                },
                'required': [
                    'Id',
                    _0x31a490(0x1f5)
                ],
                'additionalProperties': ![]
            }
        },
        'bucketEncryption': {
            'type': _0x31a490(0x1e0),
            'properties': {
                'ServerSideEncryptionConfiguration': {
                    'type': 'array',
                    'items': {
                        'type': _0x31a490(0x1e0),
                        'properties': {
                            'ServerSideEncryptionByDefault': {
                                'type': 'object',
                                'properties': {
                                    'KMSMasterKeyID': {
                                        'anyOf': [
                                            { '$ref': _0x31a490(0x1dd) },
                                            {
                                                'type': 'string',
                                                'pattern': _0x31a490(0x1f6)
                                            }
                                        ]
                                    },
                                    'SSEAlgorithm': {
                                        'enum': [
                                            'AES256',
                                            'aws:kms'
                                        ]
                                    }
                                },
                                'required': [_0x31a490(0x1f7)],
                                'additionalProperties': ![]
                            }
                        },
                        'additionalProperties': ![]
                    }
                }
            },
            'required': [_0x31a490(0x1f8)],
            'additionalProperties': ![]
        },
        'bucketName': { '$ref': _0x31a490(0x1f9) },
        'corsConfiguration': {
            'type': 'object',
            'properties': {
                'CorsRules': {
                    'type': 'array',
                    'items': {
                        'type': _0x31a490(0x1e0),
                        'properties': {
                            'AllowedHeaders': {
                                'type': _0x31a490(0x1e4),
                                'items': { 'type': _0x31a490(0x1e1) }
                            },
                            'AllowedMethods': {
                                'type': _0x31a490(0x1e4),
                                'items': {
                                    'enum': [
                                        _0x31a490(0x1fa),
                                        'PUT',
                                        _0x31a490(0x1fb),
                                        _0x31a490(0x1fc),
                                        _0x31a490(0x1fd)
                                    ]
                                }
                            },
                            'AllowedOrigins': {
                                'type': 'array',
                                'items': { 'type': _0x31a490(0x1e1) }
                            },
                            'ExposedHeaders': {
                                'type': _0x31a490(0x1e4),
                                'items': { 'type': _0x31a490(0x1e1) }
                            },
                            'Id': {
                                'type': _0x31a490(0x1e1),
                                'maxLength': 0xff
                            },
                            'MaxAge': {
                                'type': _0x31a490(0x1fe),
                                'minimum': 0x0
                            }
                        },
                        'required': [
                            _0x31a490(0x1ff),
                            'AllowedOrigins'
                        ],
                        'additionalProperties': ![]
                    },
                    'maxItems': 0x64
                }
            },
            'required': [_0x31a490(0x200)],
            'additionalProperties': ![]
        },
        'inventoryConfigurations': {
            'type': 'array',
            'items': {
                'type': _0x31a490(0x1e0),
                'properties': {
                    'Destination': destination,
                    'Enabled': { 'type': _0x31a490(0x201) },
                    'Id': { 'type': _0x31a490(0x1e1) },
                    'IncludedObjectVersions': {
                        'enum': [
                            _0x31a490(0x202),
                            _0x31a490(0x203)
                        ]
                    },
                    'OptionalFields': {
                        'type': 'array',
                        'items': { 'type': _0x31a490(0x1e1) }
                    },
                    'Prefix': { 'type': _0x31a490(0x1e1) },
                    'ScheduleFrequency': {
                        'enum': [
                            _0x31a490(0x204),
                            _0x31a490(0x205)
                        ]
                    }
                },
                'required': [
                    _0x31a490(0x1f3),
                    _0x31a490(0x206),
                    'Id',
                    _0x31a490(0x207),
                    _0x31a490(0x208)
                ],
                'additionalProperties': ![]
            }
        },
        'lifecycleConfiguration': {
            'type': 'object',
            'properties': {
                'Rules': {
                    'type': 'array',
                    'items': {
                        'type': _0x31a490(0x1e0),
                        'properties': {
                            'AbortIncompleteMultipartUpload': {
                                'type': _0x31a490(0x1e0),
                                'properties': {
                                    'DaysAfterInitiation': {
                                        'type': _0x31a490(0x1fe),
                                        'minimum': 0x0
                                    }
                                },
                                'required': [_0x31a490(0x209)],
                                'additionalProperties': ![]
                            },
                            'ExpirationDate': {
                                'type': 'string',
                                'format': _0x31a490(0x20a)
                            },
                            'ExpirationInDays': {
                                'type': 'integer',
                                'minimum': 0x0
                            },
                            'Id': {
                                'type': _0x31a490(0x1e1),
                                'maxLength': 0xff
                            },
                            'NoncurrentVersionExpirationInDays': {
                                'type': _0x31a490(0x1fe),
                                'minimum': 0x0
                            },
                            'NoncurrentVersionTransition': noncurrentVersionTransition,
                            'NoncurrentVersionTransitions': {
                                'type': 'array',
                                'items': noncurrentVersionTransition
                            },
                            'Prefix': { 'type': 'string' },
                            'Status': {
                                'enum': [
                                    'Disabled',
                                    _0x31a490(0x206)
                                ]
                            },
                            'TagFilters': {
                                'type': 'array',
                                'items': tagFilter
                            },
                            'Transitions': {
                                'type': _0x31a490(0x1e4),
                                'items': {
                                    'type': _0x31a490(0x1e0),
                                    'properties': {
                                        'StorageClass': {
                                            'enum': [
                                                _0x31a490(0x1ea),
                                                _0x31a490(0x20b),
                                                'INTELLIGENT_TIERING',
                                                _0x31a490(0x1ec),
                                                _0x31a490(0x1ed)
                                            ]
                                        },
                                        'TransitionDate': {
                                            'type': _0x31a490(0x1e1),
                                            'format': _0x31a490(0x20a)
                                        },
                                        'TransitionInDays': {
                                            'type': _0x31a490(0x1fe),
                                            'minimum': 0x1
                                        }
                                    },
                                    'required': [_0x31a490(0x1ee)],
                                    'additionalProperties': ![]
                                }
                            }
                        },
                        'required': [_0x31a490(0x20c)],
                        'anyOf': [
                            'AbortIncompleteMultipartUpload',
                            _0x31a490(0x20d),
                            _0x31a490(0x20e),
                            _0x31a490(0x20f),
                            'NoncurrentVersionTransition',
                            _0x31a490(0x210),
                            _0x31a490(0x211),
                            'Transitions'
                        ][_0x31a490(0x212)](_0x3ae296 => ({ 'required': [_0x3ae296] })),
                        'additionalProperties': ![]
                    }
                }
            },
            'required': [_0x31a490(0x1e8)],
            'additionalProperties': ![]
        },
        'loggingConfiguration': {
            'type': _0x31a490(0x1e0),
            'properties': {
                'DestinationBucketName': {
                    'anyOf': [
                        { '$ref': '#/definitions/awsS3BucketName' },
                        { '$ref': _0x31a490(0x213) }
                    ]
                },
                'LogFilePrefix': { 'type': _0x31a490(0x1e1) }
            },
            'additionalProperties': ![]
        },
        'metricsConfigurations': {
            'type': _0x31a490(0x1e4),
            'items': {
                'type': 'object',
                'properties': {
                    'Id': { 'type': 'string' },
                    'Prefix': { 'type': 'string' },
                    'TagFilters': {
                        'type': _0x31a490(0x1e4),
                        'items': tagFilter
                    }
                },
                'required': ['Id'],
                'additionalProperties': ![]
            }
        },
        'name': { '$ref': _0x31a490(0x1f9) },
        'notificationConfiguration': {
            'type': _0x31a490(0x1e0),
            'properties': {
                'LambdaConfigurations': {
                    'type': _0x31a490(0x1e4),
                    'items': {
                        'type': _0x31a490(0x1e0),
                        'properties': {
                            'Event': {
                                'type': _0x31a490(0x1e1),
                                'pattern': '^s3:'
                            },
                            'Filter': notificationFilter,
                            'Function': { '$ref': _0x31a490(0x1dd) }
                        },
                        'required': [
                            _0x31a490(0x214),
                            _0x31a490(0x215)
                        ],
                        'additionalProperties': ![]
                    }
                },
                'QueueConfigurations': {
                    'type': _0x31a490(0x1e4),
                    'items': {
                        'type': _0x31a490(0x1e0),
                        'properties': {
                            'Event': {
                                'type': 'string',
                                'pattern': _0x31a490(0x216)
                            },
                            'Filter': notificationFilter,
                            'Queue': { '$ref': '#/definitions/awsArn' }
                        },
                        'required': [
                            _0x31a490(0x214),
                            _0x31a490(0x217)
                        ],
                        'additionalProperties': ![]
                    }
                },
                'TopicConfigurations': {
                    'type': _0x31a490(0x1e4),
                    'items': {
                        'type': _0x31a490(0x1e0),
                        'properties': {
                            'Event': {
                                'type': 'string',
                                'pattern': '^s3:'
                            },
                            'Filter': notificationFilter,
                            'Topic': { '$ref': _0x31a490(0x1dd) }
                        },
                        'required': [
                            'Event',
                            _0x31a490(0x218)
                        ],
                        'additionalProperties': ![]
                    }
                }
            },
            'additionalProperties': ![]
        },
        'objectLockConfiguration': {
            'type': _0x31a490(0x1e0),
            'properties': {
                'ObjectLockEnabled': { 'const': 'Enabled' },
                'Rule': {
                    'type': _0x31a490(0x1e0),
                    'properties': {
                        'DefaultRetention': {
                            'type': _0x31a490(0x1e0),
                            'properties': {
                                'Days': {
                                    'type': 'integer',
                                    'minimum': 0x0
                                },
                                'Mode': {
                                    'enum': [
                                        'COMPLIANCE',
                                        _0x31a490(0x219)
                                    ]
                                },
                                'Years': {
                                    'type': 'integer',
                                    'minimum': 0x0
                                }
                            },
                            'additionalProperties': ![]
                        }
                    },
                    'additionalProperties': ![]
                }
            },
            'additionalProperties': ![]
        },
        'objectLockEnabled': { 'type': _0x31a490(0x201) },
        'publicAccessBlockConfiguration': {
            'type': _0x31a490(0x1e0),
            'properties': {
                'BlockPublicAcls': { 'type': 'boolean' },
                'BlockPublicPolicy': { 'type': _0x31a490(0x201) },
                'IgnorePublicAcls': { 'type': 'boolean' },
                'RestrictPublicBuckets': { 'type': _0x31a490(0x201) }
            },
            'additionalProperties': ![]
        },
        'replicationConfiguration': {
            'type': 'object',
            'properties': {
                'Role': { '$ref': _0x31a490(0x1dd) },
                'Rules': {
                    'type': _0x31a490(0x1e4),
                    'items': {
                        'type': _0x31a490(0x1e0),
                        'properties': {
                            'DeleteMarkerReplication': {
                                'type': _0x31a490(0x1e0),
                                'properties': {
                                    'Status': {
                                        'enum': [
                                            _0x31a490(0x21a),
                                            _0x31a490(0x206)
                                        ]
                                    }
                                },
                                'additionalProperties': ![]
                            },
                            'Destination': {
                                'type': _0x31a490(0x1e0),
                                'properties': {
                                    'AccessControlTranslation': {
                                        'type': 'object',
                                        'properties': { 'Owner': { 'const': _0x31a490(0x1f3) } },
                                        'required': ['Owner'],
                                        'additionalProperties': ![]
                                    },
                                    'Account': {
                                        'type': 'string',
                                        'pattern': _0x31a490(0x21b)
                                    },
                                    'Bucket': { '$ref': '#/definitions/awsArn' },
                                    'EncryptionConfiguration': {
                                        'type': 'object',
                                        'properties': { 'ReplicaKmsKeyID': { 'type': _0x31a490(0x1e1) } },
                                        'required': [_0x31a490(0x21c)],
                                        'additionalProperties': ![]
                                    },
                                    'Metrics': {
                                        'type': _0x31a490(0x1e0),
                                        'properties': {
                                            'EventThreshold': replicationTimeValue,
                                            'Status': {
                                                'enum': [
                                                    _0x31a490(0x21a),
                                                    _0x31a490(0x206)
                                                ]
                                            }
                                        },
                                        'required': [
                                            'EventThreshold',
                                            _0x31a490(0x20c)
                                        ],
                                        'additionalProperties': ![]
                                    },
                                    'ReplicationTime': {
                                        'type': 'object',
                                        'properties': {
                                            'Status': {
                                                'enum': [
                                                    _0x31a490(0x21a),
                                                    _0x31a490(0x206)
                                                ]
                                            },
                                            'Time': replicationTimeValue
                                        },
                                        'required': [
                                            'Status',
                                            'Time'
                                        ],
                                        'additionalProperties': ![]
                                    },
                                    'StorageClass': {
                                        'enum': [
                                            _0x31a490(0x1ea),
                                            _0x31a490(0x20b),
                                            _0x31a490(0x1eb),
                                            'ONEZONE_IA',
                                            _0x31a490(0x21d),
                                            _0x31a490(0x21e),
                                            _0x31a490(0x21f),
                                            'STANDARD_IA'
                                        ]
                                    }
                                },
                                'required': [_0x31a490(0x220)],
                                'additionalProperties': ![],
                                'dependencies': { 'AccessControlTranslation': [_0x31a490(0x221)] }
                            },
                            'Filter': {
                                'type': _0x31a490(0x1e0),
                                'properties': {
                                    'And': {
                                        'type': 'object',
                                        'properties': {
                                            'Prefix': { 'type': 'string' },
                                            'TagFilters': {
                                                'type': _0x31a490(0x1e4),
                                                'items': tagFilter
                                            }
                                        },
                                        'additionalProperties': ![]
                                    },
                                    'Prefix': { 'type': 'string' },
                                    'TagFilter': tagFilter
                                },
                                'additionalProperties': ![]
                            },
                            'Id': {
                                'type': 'string',
                                'maxLength': 0xff
                            },
                            'Prefix': { 'type': _0x31a490(0x1e1) },
                            'Priority': { 'type': _0x31a490(0x1fe) },
                            'SourceSelectionCriteria': {
                                'type': _0x31a490(0x1e0),
                                'properties': {
                                    'SseKmsEncryptedObjects': {
                                        'type': _0x31a490(0x1e0),
                                        'properties': {
                                            'Status': {
                                                'enum': [
                                                    _0x31a490(0x21a),
                                                    _0x31a490(0x206)
                                                ]
                                            }
                                        },
                                        'required': [_0x31a490(0x20c)],
                                        'additionalProperties': ![]
                                    }
                                },
                                'required': [_0x31a490(0x222)],
                                'additionalProperties': ![]
                            },
                            'Status': {
                                'enum': [
                                    _0x31a490(0x21a),
                                    _0x31a490(0x206)
                                ]
                            }
                        },
                        'required': [
                            _0x31a490(0x1f3),
                            'Status'
                        ],
                        'additionalProperties': ![]
                    },
                    'minItems': 0x1,
                    'maxItems': 0x3e8
                }
            },
            'required': [
                'Role',
                'Rules'
            ],
            'additionalProperties': ![]
        },
        'tags': {
            'type': _0x31a490(0x1e4),
            'items': {
                'type': _0x31a490(0x1e0),
                'properties': {
                    'Key': { 'type': _0x31a490(0x1e1) },
                    'Value': { 'type': _0x31a490(0x1e1) }
                },
                'required': [
                    'Key',
                    _0x31a490(0x1e3)
                ],
                'additionalProperties': ![]
            }
        },
        'versioningConfiguration': {
            'type': _0x31a490(0x1e0),
            'properties': {
                'Status': {
                    'enum': [
                        _0x31a490(0x206),
                        _0x31a490(0x223)
                    ]
                }
            },
            'required': ['Status'],
            'additionalProperties': ![]
        },
        'websiteConfiguration': {
            'type': 'object',
            'properties': {
                'ErrorDocument': { 'type': _0x31a490(0x1e1) },
                'IndexDocument': { 'type': 'string' },
                'RedirectAllRequestsTo': {
                    'type': _0x31a490(0x1e0),
                    'properties': {
                        'HostName': { 'type': _0x31a490(0x1e1) },
                        'Protocol': {
                            'enum': [
                                _0x31a490(0x224),
                                _0x31a490(0x225)
                            ]
                        }
                    },
                    'required': ['HostName'],
                    'additionalProperties': ![]
                },
                'RoutingRules': {
                    'type': _0x31a490(0x1e4),
                    'items': {
                        'type': 'object',
                        'properties': {
                            'RedirectRule': {
                                'type': 'object',
                                'properties': {
                                    'HostName': { 'type': 'string' },
                                    'HttpRedirectCode': { 'type': _0x31a490(0x1e1) },
                                    'Protocol': {
                                        'enum': [
                                            _0x31a490(0x224),
                                            'https'
                                        ]
                                    },
                                    'ReplaceKeyPrefixWith': { 'type': _0x31a490(0x1e1) },
                                    'ReplaceKeyWith': { 'type': _0x31a490(0x1e1) }
                                },
                                'additionalProperties': ![]
                            },
                            'RoutingRuleCondition': {
                                'type': 'object',
                                'properties': {
                                    'HttpErrorCodeReturnedEquals': { 'type': 'string' },
                                    'KeyPrefixEquals': { 'type': _0x31a490(0x1e1) }
                                },
                                'additionalProperties': ![]
                            }
                        },
                        'required': [_0x31a490(0x226)],
                        'additionalProperties': ![]
                    }
                }
            },
            'additionalProperties': ![]
        }
    },
    'additionalProperties': ![]
};
