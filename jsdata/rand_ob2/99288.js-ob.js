'use strict';
const _0x534e = [
    'RedirectRule',
    '363827RHkUpf',
    '473084zaopHg',
    '464430LsTZPF',
    '264803jQVhMW',
    '387744zVPRkE',
    '646oISViL',
    '568QugwRT',
    '1305724yVqNhX',
    'object',
    'string',
    '\x5cd{12}',
    'CSV',
    'Parquet',
    'BucketArn',
    'Format',
    'Key',
    'Value',
    'prefix',
    'suffix',
    'Rules',
    'S3Key',
    'INTELLIGENT_TIERING',
    'ONEZONE_IA',
    'STANDARD_IA',
    'StorageClass',
    'TransitionInDays',
    'Minutes',
    'Enabled',
    'Suspended',
    'AccelerationStatus',
    'array',
    'V_1',
    'Destination',
    'OutputSchemaVersion',
    'StorageClassAnalysis',
    '^[a-f0-9-]+$',
    'AES256',
    'aws:kms',
    'SSEAlgorithm',
    '#/definitions/awsS3BucketName',
    'GET',
    'PUT',
    'HEAD',
    'POST',
    'DELETE',
    'AllowedOrigins',
    'CorsRules',
    'boolean',
    'All',
    'Daily',
    'Weekly',
    'IncludedObjectVersions',
    'ScheduleFrequency',
    'integer',
    'date-time',
    'Disabled',
    'DEEP_ARCHIVE',
    'GLACIER',
    'Status',
    'AbortIncompleteMultipartUpload',
    'ExpirationInDays',
    'NoncurrentVersionExpirationInDays',
    'NoncurrentVersionTransitions',
    'Transition',
    'Transitions',
    'map',
    '#/definitions/awsCfFunction',
    '^s3:',
    'Event',
    '#/definitions/awsArn',
    'Queue',
    'Topic',
    'COMPLIANCE',
    'GOVERNANCE',
    'Owner',
    '^\x5cd{12}$',
    'ReplicaKmsKeyID',
    'Time',
    'REDUCED_REDUNDANCY',
    'STANDARD',
    'Bucket',
    'Account',
    'SseKmsEncryptedObjects',
    'Role',
    'https',
    'HostName'
];
const _0x3e771d = _0x3d5f;
(function (_0xea9d0, _0x3cd3c6) {
    const _0x1b81a7 = _0x3d5f;
    while (!![]) {
        try {
            const _0x35531a = parseInt(_0x1b81a7(0xa0)) + parseInt(_0x1b81a7(0xa1)) + parseInt(_0x1b81a7(0xa2)) + parseInt(_0x1b81a7(0xa3)) + parseInt(_0x1b81a7(0xa4)) + -parseInt(_0x1b81a7(0xa5)) * parseInt(_0x1b81a7(0xa6)) + -parseInt(_0x1b81a7(0xa7));
            if (_0x35531a === _0x3cd3c6)
                break;
            else
                _0xea9d0['push'](_0xea9d0['shift']());
        } catch (_0x30446d) {
            _0xea9d0['push'](_0xea9d0['shift']());
        }
    }
}(_0x534e, 0x44a94));
const destination = {
        'type': _0x3e771d(0xa8),
        'properties': {
            'BucketAccountId': {
                'type': _0x3e771d(0xa9),
                'pattern': _0x3e771d(0xaa)
            },
            'BucketArn': { '$ref': '#/definitions/awsArn' },
            'Format': {
                'enum': [
                    _0x3e771d(0xab),
                    'ORC',
                    _0x3e771d(0xac)
                ]
            },
            'Prefix': { 'type': _0x3e771d(0xa9) }
        },
        'required': [
            _0x3e771d(0xad),
            _0x3e771d(0xae)
        ],
        'additionalProperties': ![]
    }, tagFilter = {
        'type': _0x3e771d(0xa8),
        'properties': {
            'Key': { 'type': _0x3e771d(0xa9) },
            'Value': { 'type': _0x3e771d(0xa9) }
        },
        'required': [
            _0x3e771d(0xaf),
            _0x3e771d(0xb0)
        ],
        'additionalProperties': ![]
    }, notificationFilter = {
        'type': _0x3e771d(0xa8),
        'properties': {
            'S3Key': {
                'type': 'object',
                'properties': {
                    'Rules': {
                        'type': 'array',
                        'items': {
                            'type': _0x3e771d(0xa8),
                            'properties': {
                                'Name': {
                                    'enum': [
                                        _0x3e771d(0xb1),
                                        _0x3e771d(0xb2)
                                    ]
                                },
                                'Value': { 'type': _0x3e771d(0xa9) }
                            },
                            'required': [
                                'Name',
                                _0x3e771d(0xb0)
                            ],
                            'additionalProperties': ![]
                        }
                    }
                },
                'required': [_0x3e771d(0xb3)],
                'additionalProperties': ![]
            }
        },
        'required': [_0x3e771d(0xb4)],
        'additionalProperties': ![]
    }, noncurrentVersionTransition = {
        'type': _0x3e771d(0xa8),
        'properties': {
            'StorageClass': {
                'enum': [
                    'DEEP_ARCHIVE',
                    'GLACIER',
                    _0x3e771d(0xb5),
                    _0x3e771d(0xb6),
                    _0x3e771d(0xb7)
                ]
            },
            'TransitionInDays': {
                'type': 'integer',
                'minimum': 0x0
            }
        },
        'required': [
            _0x3e771d(0xb8),
            _0x3e771d(0xb9)
        ],
        'additionalProperties': ![]
    }, replicationTimeValue = {
        'type': _0x3e771d(0xa8),
        'properties': {
            'Minutes': {
                'type': 'integer',
                'minimum': 0x0
            }
        },
        'required': [_0x3e771d(0xba)],
        'additionalProperties': ![]
    };
function _0x3d5f(_0x5eca71, _0x4fc692) {
    return _0x3d5f = function (_0x534ebe, _0x3d5f5b) {
        _0x534ebe = _0x534ebe - 0xa0;
        let _0xbcd4fe = _0x534e[_0x534ebe];
        return _0xbcd4fe;
    }, _0x3d5f(_0x5eca71, _0x4fc692);
}
module['exports'] = {
    'type': _0x3e771d(0xa8),
    'properties': {
        'accelerateConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'AccelerationStatus': {
                    'enum': [
                        _0x3e771d(0xbb),
                        _0x3e771d(0xbc)
                    ]
                }
            },
            'required': [_0x3e771d(0xbd)],
            'additionalProperties': ![]
        },
        'accessControl': { 'type': _0x3e771d(0xa9) },
        'analyticsConfigurations': {
            'type': _0x3e771d(0xbe),
            'items': {
                'type': _0x3e771d(0xa8),
                'properties': {
                    'Id': { 'type': _0x3e771d(0xa9) },
                    'Prefix': { 'type': _0x3e771d(0xa9) },
                    'StorageClassAnalysis': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'DataExport': {
                                'type': _0x3e771d(0xa8),
                                'properties': {
                                    'Destination': destination,
                                    'OutputSchemaVersion': { 'const': _0x3e771d(0xbf) }
                                },
                                'required': [
                                    _0x3e771d(0xc0),
                                    _0x3e771d(0xc1)
                                ],
                                'additionalProperties': ![]
                            }
                        },
                        'additionalProperties': ![]
                    },
                    'TagFilters': {
                        'type': _0x3e771d(0xbe),
                        'items': tagFilter
                    }
                },
                'required': [
                    'Id',
                    _0x3e771d(0xc2)
                ],
                'additionalProperties': ![]
            }
        },
        'bucketEncryption': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'ServerSideEncryptionConfiguration': {
                    'type': _0x3e771d(0xbe),
                    'items': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'ServerSideEncryptionByDefault': {
                                'type': _0x3e771d(0xa8),
                                'properties': {
                                    'KMSMasterKeyID': {
                                        'anyOf': [
                                            { '$ref': '#/definitions/awsArn' },
                                            {
                                                'type': _0x3e771d(0xa9),
                                                'pattern': _0x3e771d(0xc3)
                                            }
                                        ]
                                    },
                                    'SSEAlgorithm': {
                                        'enum': [
                                            _0x3e771d(0xc4),
                                            _0x3e771d(0xc5)
                                        ]
                                    }
                                },
                                'required': [_0x3e771d(0xc6)],
                                'additionalProperties': ![]
                            }
                        },
                        'additionalProperties': ![]
                    }
                }
            },
            'required': ['ServerSideEncryptionConfiguration'],
            'additionalProperties': ![]
        },
        'bucketName': { '$ref': _0x3e771d(0xc7) },
        'corsConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'CorsRules': {
                    'type': _0x3e771d(0xbe),
                    'items': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'AllowedHeaders': {
                                'type': _0x3e771d(0xbe),
                                'items': { 'type': _0x3e771d(0xa9) }
                            },
                            'AllowedMethods': {
                                'type': 'array',
                                'items': {
                                    'enum': [
                                        _0x3e771d(0xc8),
                                        _0x3e771d(0xc9),
                                        _0x3e771d(0xca),
                                        _0x3e771d(0xcb),
                                        _0x3e771d(0xcc)
                                    ]
                                }
                            },
                            'AllowedOrigins': {
                                'type': _0x3e771d(0xbe),
                                'items': { 'type': _0x3e771d(0xa9) }
                            },
                            'ExposedHeaders': {
                                'type': _0x3e771d(0xbe),
                                'items': { 'type': 'string' }
                            },
                            'Id': {
                                'type': _0x3e771d(0xa9),
                                'maxLength': 0xff
                            },
                            'MaxAge': {
                                'type': 'integer',
                                'minimum': 0x0
                            }
                        },
                        'required': [
                            'AllowedMethods',
                            _0x3e771d(0xcd)
                        ],
                        'additionalProperties': ![]
                    },
                    'maxItems': 0x64
                }
            },
            'required': [_0x3e771d(0xce)],
            'additionalProperties': ![]
        },
        'inventoryConfigurations': {
            'type': _0x3e771d(0xbe),
            'items': {
                'type': _0x3e771d(0xa8),
                'properties': {
                    'Destination': destination,
                    'Enabled': { 'type': _0x3e771d(0xcf) },
                    'Id': { 'type': _0x3e771d(0xa9) },
                    'IncludedObjectVersions': {
                        'enum': [
                            _0x3e771d(0xd0),
                            'Current'
                        ]
                    },
                    'OptionalFields': {
                        'type': _0x3e771d(0xbe),
                        'items': { 'type': _0x3e771d(0xa9) }
                    },
                    'Prefix': { 'type': 'string' },
                    'ScheduleFrequency': {
                        'enum': [
                            _0x3e771d(0xd1),
                            _0x3e771d(0xd2)
                        ]
                    }
                },
                'required': [
                    _0x3e771d(0xc0),
                    _0x3e771d(0xbb),
                    'Id',
                    _0x3e771d(0xd3),
                    _0x3e771d(0xd4)
                ],
                'additionalProperties': ![]
            }
        },
        'lifecycleConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'Rules': {
                    'type': _0x3e771d(0xbe),
                    'items': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'AbortIncompleteMultipartUpload': {
                                'type': 'object',
                                'properties': {
                                    'DaysAfterInitiation': {
                                        'type': _0x3e771d(0xd5),
                                        'minimum': 0x0
                                    }
                                },
                                'required': ['DaysAfterInitiation'],
                                'additionalProperties': ![]
                            },
                            'ExpirationDate': {
                                'type': _0x3e771d(0xa9),
                                'format': _0x3e771d(0xd6)
                            },
                            'ExpirationInDays': {
                                'type': _0x3e771d(0xd5),
                                'minimum': 0x0
                            },
                            'Id': {
                                'type': 'string',
                                'maxLength': 0xff
                            },
                            'NoncurrentVersionExpirationInDays': {
                                'type': _0x3e771d(0xd5),
                                'minimum': 0x0
                            },
                            'NoncurrentVersionTransition': noncurrentVersionTransition,
                            'NoncurrentVersionTransitions': {
                                'type': _0x3e771d(0xbe),
                                'items': noncurrentVersionTransition
                            },
                            'Prefix': { 'type': _0x3e771d(0xa9) },
                            'Status': {
                                'enum': [
                                    _0x3e771d(0xd7),
                                    _0x3e771d(0xbb)
                                ]
                            },
                            'TagFilters': {
                                'type': 'array',
                                'items': tagFilter
                            },
                            'Transitions': {
                                'type': _0x3e771d(0xbe),
                                'items': {
                                    'type': _0x3e771d(0xa8),
                                    'properties': {
                                        'StorageClass': {
                                            'enum': [
                                                _0x3e771d(0xd8),
                                                _0x3e771d(0xd9),
                                                _0x3e771d(0xb5),
                                                _0x3e771d(0xb6),
                                                _0x3e771d(0xb7)
                                            ]
                                        },
                                        'TransitionDate': {
                                            'type': _0x3e771d(0xa9),
                                            'format': _0x3e771d(0xd6)
                                        },
                                        'TransitionInDays': {
                                            'type': _0x3e771d(0xd5),
                                            'minimum': 0x1
                                        }
                                    },
                                    'required': [_0x3e771d(0xb8)],
                                    'additionalProperties': ![]
                                }
                            }
                        },
                        'required': [_0x3e771d(0xda)],
                        'anyOf': [
                            _0x3e771d(0xdb),
                            'ExpirationDate',
                            _0x3e771d(0xdc),
                            _0x3e771d(0xdd),
                            'NoncurrentVersionTransition',
                            _0x3e771d(0xde),
                            _0x3e771d(0xdf),
                            _0x3e771d(0xe0)
                        ][_0x3e771d(0xe1)](_0x29e95d => ({ 'required': [_0x29e95d] })),
                        'additionalProperties': ![]
                    }
                }
            },
            'required': [_0x3e771d(0xb3)],
            'additionalProperties': ![]
        },
        'loggingConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'DestinationBucketName': {
                    'anyOf': [
                        { '$ref': _0x3e771d(0xc7) },
                        { '$ref': _0x3e771d(0xe2) }
                    ]
                },
                'LogFilePrefix': { 'type': _0x3e771d(0xa9) }
            },
            'additionalProperties': ![]
        },
        'metricsConfigurations': {
            'type': _0x3e771d(0xbe),
            'items': {
                'type': 'object',
                'properties': {
                    'Id': { 'type': _0x3e771d(0xa9) },
                    'Prefix': { 'type': _0x3e771d(0xa9) },
                    'TagFilters': {
                        'type': _0x3e771d(0xbe),
                        'items': tagFilter
                    }
                },
                'required': ['Id'],
                'additionalProperties': ![]
            }
        },
        'name': { '$ref': _0x3e771d(0xc7) },
        'notificationConfiguration': {
            'type': 'object',
            'properties': {
                'LambdaConfigurations': {
                    'type': _0x3e771d(0xbe),
                    'items': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'Event': {
                                'type': _0x3e771d(0xa9),
                                'pattern': _0x3e771d(0xe3)
                            },
                            'Filter': notificationFilter,
                            'Function': { '$ref': '#/definitions/awsArn' }
                        },
                        'required': [
                            _0x3e771d(0xe4),
                            'Function'
                        ],
                        'additionalProperties': ![]
                    }
                },
                'QueueConfigurations': {
                    'type': 'array',
                    'items': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'Event': {
                                'type': 'string',
                                'pattern': _0x3e771d(0xe3)
                            },
                            'Filter': notificationFilter,
                            'Queue': { '$ref': _0x3e771d(0xe5) }
                        },
                        'required': [
                            _0x3e771d(0xe4),
                            _0x3e771d(0xe6)
                        ],
                        'additionalProperties': ![]
                    }
                },
                'TopicConfigurations': {
                    'type': 'array',
                    'items': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'Event': {
                                'type': _0x3e771d(0xa9),
                                'pattern': _0x3e771d(0xe3)
                            },
                            'Filter': notificationFilter,
                            'Topic': { '$ref': _0x3e771d(0xe5) }
                        },
                        'required': [
                            _0x3e771d(0xe4),
                            _0x3e771d(0xe7)
                        ],
                        'additionalProperties': ![]
                    }
                }
            },
            'additionalProperties': ![]
        },
        'objectLockConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'ObjectLockEnabled': { 'const': _0x3e771d(0xbb) },
                'Rule': {
                    'type': _0x3e771d(0xa8),
                    'properties': {
                        'DefaultRetention': {
                            'type': _0x3e771d(0xa8),
                            'properties': {
                                'Days': {
                                    'type': _0x3e771d(0xd5),
                                    'minimum': 0x0
                                },
                                'Mode': {
                                    'enum': [
                                        _0x3e771d(0xe8),
                                        _0x3e771d(0xe9)
                                    ]
                                },
                                'Years': {
                                    'type': _0x3e771d(0xd5),
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
        'objectLockEnabled': { 'type': _0x3e771d(0xcf) },
        'publicAccessBlockConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'BlockPublicAcls': { 'type': _0x3e771d(0xcf) },
                'BlockPublicPolicy': { 'type': 'boolean' },
                'IgnorePublicAcls': { 'type': _0x3e771d(0xcf) },
                'RestrictPublicBuckets': { 'type': _0x3e771d(0xcf) }
            },
            'additionalProperties': ![]
        },
        'replicationConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'Role': { '$ref': _0x3e771d(0xe5) },
                'Rules': {
                    'type': _0x3e771d(0xbe),
                    'items': {
                        'type': _0x3e771d(0xa8),
                        'properties': {
                            'DeleteMarkerReplication': {
                                'type': _0x3e771d(0xa8),
                                'properties': {
                                    'Status': {
                                        'enum': [
                                            _0x3e771d(0xd7),
                                            _0x3e771d(0xbb)
                                        ]
                                    }
                                },
                                'additionalProperties': ![]
                            },
                            'Destination': {
                                'type': _0x3e771d(0xa8),
                                'properties': {
                                    'AccessControlTranslation': {
                                        'type': _0x3e771d(0xa8),
                                        'properties': { 'Owner': { 'const': _0x3e771d(0xc0) } },
                                        'required': [_0x3e771d(0xea)],
                                        'additionalProperties': ![]
                                    },
                                    'Account': {
                                        'type': _0x3e771d(0xa9),
                                        'pattern': _0x3e771d(0xeb)
                                    },
                                    'Bucket': { '$ref': _0x3e771d(0xe5) },
                                    'EncryptionConfiguration': {
                                        'type': _0x3e771d(0xa8),
                                        'properties': { 'ReplicaKmsKeyID': { 'type': _0x3e771d(0xa9) } },
                                        'required': [_0x3e771d(0xec)],
                                        'additionalProperties': ![]
                                    },
                                    'Metrics': {
                                        'type': 'object',
                                        'properties': {
                                            'EventThreshold': replicationTimeValue,
                                            'Status': {
                                                'enum': [
                                                    _0x3e771d(0xd7),
                                                    'Enabled'
                                                ]
                                            }
                                        },
                                        'required': [
                                            'EventThreshold',
                                            'Status'
                                        ],
                                        'additionalProperties': ![]
                                    },
                                    'ReplicationTime': {
                                        'type': 'object',
                                        'properties': {
                                            'Status': {
                                                'enum': [
                                                    _0x3e771d(0xd7),
                                                    _0x3e771d(0xbb)
                                                ]
                                            },
                                            'Time': replicationTimeValue
                                        },
                                        'required': [
                                            _0x3e771d(0xda),
                                            _0x3e771d(0xed)
                                        ],
                                        'additionalProperties': ![]
                                    },
                                    'StorageClass': {
                                        'enum': [
                                            _0x3e771d(0xd8),
                                            'GLACIER',
                                            _0x3e771d(0xb5),
                                            _0x3e771d(0xb6),
                                            'OUTPOSTS',
                                            _0x3e771d(0xee),
                                            _0x3e771d(0xef),
                                            _0x3e771d(0xb7)
                                        ]
                                    }
                                },
                                'required': [_0x3e771d(0xf0)],
                                'additionalProperties': ![],
                                'dependencies': { 'AccessControlTranslation': [_0x3e771d(0xf1)] }
                            },
                            'Filter': {
                                'type': _0x3e771d(0xa8),
                                'properties': {
                                    'And': {
                                        'type': _0x3e771d(0xa8),
                                        'properties': {
                                            'Prefix': { 'type': _0x3e771d(0xa9) },
                                            'TagFilters': {
                                                'type': _0x3e771d(0xbe),
                                                'items': tagFilter
                                            }
                                        },
                                        'additionalProperties': ![]
                                    },
                                    'Prefix': { 'type': _0x3e771d(0xa9) },
                                    'TagFilter': tagFilter
                                },
                                'additionalProperties': ![]
                            },
                            'Id': {
                                'type': _0x3e771d(0xa9),
                                'maxLength': 0xff
                            },
                            'Prefix': { 'type': 'string' },
                            'Priority': { 'type': _0x3e771d(0xd5) },
                            'SourceSelectionCriteria': {
                                'type': _0x3e771d(0xa8),
                                'properties': {
                                    'SseKmsEncryptedObjects': {
                                        'type': _0x3e771d(0xa8),
                                        'properties': {
                                            'Status': {
                                                'enum': [
                                                    _0x3e771d(0xd7),
                                                    _0x3e771d(0xbb)
                                                ]
                                            }
                                        },
                                        'required': ['Status'],
                                        'additionalProperties': ![]
                                    }
                                },
                                'required': [_0x3e771d(0xf2)],
                                'additionalProperties': ![]
                            },
                            'Status': {
                                'enum': [
                                    _0x3e771d(0xd7),
                                    _0x3e771d(0xbb)
                                ]
                            }
                        },
                        'required': [
                            _0x3e771d(0xc0),
                            _0x3e771d(0xda)
                        ],
                        'additionalProperties': ![]
                    },
                    'minItems': 0x1,
                    'maxItems': 0x3e8
                }
            },
            'required': [
                _0x3e771d(0xf3),
                'Rules'
            ],
            'additionalProperties': ![]
        },
        'tags': {
            'type': _0x3e771d(0xbe),
            'items': {
                'type': 'object',
                'properties': {
                    'Key': { 'type': _0x3e771d(0xa9) },
                    'Value': { 'type': _0x3e771d(0xa9) }
                },
                'required': [
                    _0x3e771d(0xaf),
                    _0x3e771d(0xb0)
                ],
                'additionalProperties': ![]
            }
        },
        'versioningConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'Status': {
                    'enum': [
                        _0x3e771d(0xbb),
                        'Suspended'
                    ]
                }
            },
            'required': [_0x3e771d(0xda)],
            'additionalProperties': ![]
        },
        'websiteConfiguration': {
            'type': _0x3e771d(0xa8),
            'properties': {
                'ErrorDocument': { 'type': _0x3e771d(0xa9) },
                'IndexDocument': { 'type': _0x3e771d(0xa9) },
                'RedirectAllRequestsTo': {
                    'type': _0x3e771d(0xa8),
                    'properties': {
                        'HostName': { 'type': _0x3e771d(0xa9) },
                        'Protocol': {
                            'enum': [
                                'http',
                                _0x3e771d(0xf4)
                            ]
                        }
                    },
                    'required': [_0x3e771d(0xf5)],
                    'additionalProperties': ![]
                },
                'RoutingRules': {
                    'type': _0x3e771d(0xbe),
                    'items': {
                        'type': 'object',
                        'properties': {
                            'RedirectRule': {
                                'type': _0x3e771d(0xa8),
                                'properties': {
                                    'HostName': { 'type': 'string' },
                                    'HttpRedirectCode': { 'type': _0x3e771d(0xa9) },
                                    'Protocol': {
                                        'enum': [
                                            'http',
                                            _0x3e771d(0xf4)
                                        ]
                                    },
                                    'ReplaceKeyPrefixWith': { 'type': _0x3e771d(0xa9) },
                                    'ReplaceKeyWith': { 'type': 'string' }
                                },
                                'additionalProperties': ![]
                            },
                            'RoutingRuleCondition': {
                                'type': 'object',
                                'properties': {
                                    'HttpErrorCodeReturnedEquals': { 'type': _0x3e771d(0xa9) },
                                    'KeyPrefixEquals': { 'type': 'string' }
                                },
                                'additionalProperties': ![]
                            }
                        },
                        'required': [_0x3e771d(0xf6)],
                        'additionalProperties': ![]
                    }
                }
            },
            'additionalProperties': ![]
        }
    },
    'additionalProperties': ![]
};
