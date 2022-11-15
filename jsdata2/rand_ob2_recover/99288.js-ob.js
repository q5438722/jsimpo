const destination = {
        'type': _0x3e771d(168),
        'properties': {
            'BucketAccountId': {
                'type': _0x3e771d(169),
                'pattern': _0x3e771d(170)
            },
            'BucketArn': { '$ref': '#/definitions/awsArn' },
            'Format': {
                'enum': [
                    _0x3e771d(171),
                    'ORC',
                    _0x3e771d(172)
                ]
            },
            'Prefix': { 'type': _0x3e771d(169) }
        },
        'required': [
            _0x3e771d(173),
            _0x3e771d(174)
        ],
        'additionalProperties': ![]
    }, tagFilter = {
        'type': _0x3e771d(168),
        'properties': {
            'Key': { 'type': _0x3e771d(169) },
            'Value': { 'type': _0x3e771d(169) }
        },
        'required': [
            _0x3e771d(175),
            _0x3e771d(176)
        ],
        'additionalProperties': ![]
    }, notificationFilter = {
        'type': _0x3e771d(168),
        'properties': {
            'S3Key': {
                'type': 'object',
                'properties': {
                    'Rules': {
                        'type': 'array',
                        'items': {
                            'type': _0x3e771d(168),
                            'properties': {
                                'Name': {
                                    'enum': [
                                        _0x3e771d(177),
                                        _0x3e771d(178)
                                    ]
                                },
                                'Value': { 'type': _0x3e771d(169) }
                            },
                            'required': [
                                'Name',
                                _0x3e771d(176)
                            ],
                            'additionalProperties': ![]
                        }
                    }
                },
                'required': [_0x3e771d(179)],
                'additionalProperties': ![]
            }
        },
        'required': [_0x3e771d(180)],
        'additionalProperties': ![]
    }, noncurrentVersionTransition = {
        'type': _0x3e771d(168),
        'properties': {
            'StorageClass': {
                'enum': [
                    'DEEP_ARCHIVE',
                    'GLACIER',
                    _0x3e771d(181),
                    _0x3e771d(182),
                    _0x3e771d(183)
                ]
            },
            'TransitionInDays': {
                'type': 'integer',
                'minimum': 0
            }
        },
        'required': [
            _0x3e771d(184),
            _0x3e771d(185)
        ],
        'additionalProperties': ![]
    }, replicationTimeValue = {
        'type': _0x3e771d(168),
        'properties': {
            'Minutes': {
                'type': 'integer',
                'minimum': 0
            }
        },
        'required': [_0x3e771d(186)],
        'additionalProperties': ![]
    };
function _0x3d5f(_0x5eca71, _0x4fc692) {
    return _0x3d5f = function (_0x534ebe, _0x3d5f5b) {
        _0x534ebe = _0x534ebe - 160;
        let _0xbcd4fe = _0x534e[_0x534ebe];
        return _0xbcd4fe;
    }, _0x3d5f(_0x5eca71, _0x4fc692);
}
module['exports'] = {
    'type': _0x3e771d(168),
    'properties': {
        'accelerateConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'AccelerationStatus': {
                    'enum': [
                        _0x3e771d(187),
                        _0x3e771d(188)
                    ]
                }
            },
            'required': [_0x3e771d(189)],
            'additionalProperties': ![]
        },
        'accessControl': { 'type': _0x3e771d(169) },
        'analyticsConfigurations': {
            'type': _0x3e771d(190),
            'items': {
                'type': _0x3e771d(168),
                'properties': {
                    'Id': { 'type': _0x3e771d(169) },
                    'Prefix': { 'type': _0x3e771d(169) },
                    'StorageClassAnalysis': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'DataExport': {
                                'type': _0x3e771d(168),
                                'properties': {
                                    'Destination': destination,
                                    'OutputSchemaVersion': { 'const': _0x3e771d(191) }
                                },
                                'required': [
                                    _0x3e771d(192),
                                    _0x3e771d(193)
                                ],
                                'additionalProperties': ![]
                            }
                        },
                        'additionalProperties': ![]
                    },
                    'TagFilters': {
                        'type': _0x3e771d(190),
                        'items': tagFilter
                    }
                },
                'required': [
                    'Id',
                    _0x3e771d(194)
                ],
                'additionalProperties': ![]
            }
        },
        'bucketEncryption': {
            'type': _0x3e771d(168),
            'properties': {
                'ServerSideEncryptionConfiguration': {
                    'type': _0x3e771d(190),
                    'items': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'ServerSideEncryptionByDefault': {
                                'type': _0x3e771d(168),
                                'properties': {
                                    'KMSMasterKeyID': {
                                        'anyOf': [
                                            { '$ref': '#/definitions/awsArn' },
                                            {
                                                'type': _0x3e771d(169),
                                                'pattern': _0x3e771d(195)
                                            }
                                        ]
                                    },
                                    'SSEAlgorithm': {
                                        'enum': [
                                            _0x3e771d(196),
                                            _0x3e771d(197)
                                        ]
                                    }
                                },
                                'required': [_0x3e771d(198)],
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
        'bucketName': { '$ref': _0x3e771d(199) },
        'corsConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'CorsRules': {
                    'type': _0x3e771d(190),
                    'items': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'AllowedHeaders': {
                                'type': _0x3e771d(190),
                                'items': { 'type': _0x3e771d(169) }
                            },
                            'AllowedMethods': {
                                'type': 'array',
                                'items': {
                                    'enum': [
                                        _0x3e771d(200),
                                        _0x3e771d(201),
                                        _0x3e771d(202),
                                        _0x3e771d(203),
                                        _0x3e771d(204)
                                    ]
                                }
                            },
                            'AllowedOrigins': {
                                'type': _0x3e771d(190),
                                'items': { 'type': _0x3e771d(169) }
                            },
                            'ExposedHeaders': {
                                'type': _0x3e771d(190),
                                'items': { 'type': 'string' }
                            },
                            'Id': {
                                'type': _0x3e771d(169),
                                'maxLength': 255
                            },
                            'MaxAge': {
                                'type': 'integer',
                                'minimum': 0
                            }
                        },
                        'required': [
                            'AllowedMethods',
                            _0x3e771d(205)
                        ],
                        'additionalProperties': ![]
                    },
                    'maxItems': 100
                }
            },
            'required': [_0x3e771d(206)],
            'additionalProperties': ![]
        },
        'inventoryConfigurations': {
            'type': _0x3e771d(190),
            'items': {
                'type': _0x3e771d(168),
                'properties': {
                    'Destination': destination,
                    'Enabled': { 'type': _0x3e771d(207) },
                    'Id': { 'type': _0x3e771d(169) },
                    'IncludedObjectVersions': {
                        'enum': [
                            _0x3e771d(208),
                            'Current'
                        ]
                    },
                    'OptionalFields': {
                        'type': _0x3e771d(190),
                        'items': { 'type': _0x3e771d(169) }
                    },
                    'Prefix': { 'type': 'string' },
                    'ScheduleFrequency': {
                        'enum': [
                            _0x3e771d(209),
                            _0x3e771d(210)
                        ]
                    }
                },
                'required': [
                    _0x3e771d(192),
                    _0x3e771d(187),
                    'Id',
                    _0x3e771d(211),
                    _0x3e771d(212)
                ],
                'additionalProperties': ![]
            }
        },
        'lifecycleConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'Rules': {
                    'type': _0x3e771d(190),
                    'items': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'AbortIncompleteMultipartUpload': {
                                'type': 'object',
                                'properties': {
                                    'DaysAfterInitiation': {
                                        'type': _0x3e771d(213),
                                        'minimum': 0
                                    }
                                },
                                'required': ['DaysAfterInitiation'],
                                'additionalProperties': ![]
                            },
                            'ExpirationDate': {
                                'type': _0x3e771d(169),
                                'format': _0x3e771d(214)
                            },
                            'ExpirationInDays': {
                                'type': _0x3e771d(213),
                                'minimum': 0
                            },
                            'Id': {
                                'type': 'string',
                                'maxLength': 255
                            },
                            'NoncurrentVersionExpirationInDays': {
                                'type': _0x3e771d(213),
                                'minimum': 0
                            },
                            'NoncurrentVersionTransition': noncurrentVersionTransition,
                            'NoncurrentVersionTransitions': {
                                'type': _0x3e771d(190),
                                'items': noncurrentVersionTransition
                            },
                            'Prefix': { 'type': _0x3e771d(169) },
                            'Status': {
                                'enum': [
                                    _0x3e771d(215),
                                    _0x3e771d(187)
                                ]
                            },
                            'TagFilters': {
                                'type': 'array',
                                'items': tagFilter
                            },
                            'Transitions': {
                                'type': _0x3e771d(190),
                                'items': {
                                    'type': _0x3e771d(168),
                                    'properties': {
                                        'StorageClass': {
                                            'enum': [
                                                _0x3e771d(216),
                                                _0x3e771d(217),
                                                _0x3e771d(181),
                                                _0x3e771d(182),
                                                _0x3e771d(183)
                                            ]
                                        },
                                        'TransitionDate': {
                                            'type': _0x3e771d(169),
                                            'format': _0x3e771d(214)
                                        },
                                        'TransitionInDays': {
                                            'type': _0x3e771d(213),
                                            'minimum': 1
                                        }
                                    },
                                    'required': [_0x3e771d(184)],
                                    'additionalProperties': ![]
                                }
                            }
                        },
                        'required': [_0x3e771d(218)],
                        'anyOf': [
                            _0x3e771d(219),
                            'ExpirationDate',
                            _0x3e771d(220),
                            _0x3e771d(221),
                            'NoncurrentVersionTransition',
                            _0x3e771d(222),
                            _0x3e771d(223),
                            _0x3e771d(224)
                        ][_0x3e771d(225)](_0x29e95d => ({ 'required': [_0x29e95d] })),
                        'additionalProperties': ![]
                    }
                }
            },
            'required': [_0x3e771d(179)],
            'additionalProperties': ![]
        },
        'loggingConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'DestinationBucketName': {
                    'anyOf': [
                        { '$ref': _0x3e771d(199) },
                        { '$ref': _0x3e771d(226) }
                    ]
                },
                'LogFilePrefix': { 'type': _0x3e771d(169) }
            },
            'additionalProperties': ![]
        },
        'metricsConfigurations': {
            'type': _0x3e771d(190),
            'items': {
                'type': 'object',
                'properties': {
                    'Id': { 'type': _0x3e771d(169) },
                    'Prefix': { 'type': _0x3e771d(169) },
                    'TagFilters': {
                        'type': _0x3e771d(190),
                        'items': tagFilter
                    }
                },
                'required': ['Id'],
                'additionalProperties': ![]
            }
        },
        'name': { '$ref': _0x3e771d(199) },
        'notificationConfiguration': {
            'type': 'object',
            'properties': {
                'LambdaConfigurations': {
                    'type': _0x3e771d(190),
                    'items': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'Event': {
                                'type': _0x3e771d(169),
                                'pattern': _0x3e771d(227)
                            },
                            'Filter': notificationFilter,
                            'Function': { '$ref': '#/definitions/awsArn' }
                        },
                        'required': [
                            _0x3e771d(228),
                            'Function'
                        ],
                        'additionalProperties': ![]
                    }
                },
                'QueueConfigurations': {
                    'type': 'array',
                    'items': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'Event': {
                                'type': 'string',
                                'pattern': _0x3e771d(227)
                            },
                            'Filter': notificationFilter,
                            'Queue': { '$ref': _0x3e771d(229) }
                        },
                        'required': [
                            _0x3e771d(228),
                            _0x3e771d(230)
                        ],
                        'additionalProperties': ![]
                    }
                },
                'TopicConfigurations': {
                    'type': 'array',
                    'items': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'Event': {
                                'type': _0x3e771d(169),
                                'pattern': _0x3e771d(227)
                            },
                            'Filter': notificationFilter,
                            'Topic': { '$ref': _0x3e771d(229) }
                        },
                        'required': [
                            _0x3e771d(228),
                            _0x3e771d(231)
                        ],
                        'additionalProperties': ![]
                    }
                }
            },
            'additionalProperties': ![]
        },
        'objectLockConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'ObjectLockEnabled': { 'const': _0x3e771d(187) },
                'Rule': {
                    'type': _0x3e771d(168),
                    'properties': {
                        'DefaultRetention': {
                            'type': _0x3e771d(168),
                            'properties': {
                                'Days': {
                                    'type': _0x3e771d(213),
                                    'minimum': 0
                                },
                                'Mode': {
                                    'enum': [
                                        _0x3e771d(232),
                                        _0x3e771d(233)
                                    ]
                                },
                                'Years': {
                                    'type': _0x3e771d(213),
                                    'minimum': 0
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
        'objectLockEnabled': { 'type': _0x3e771d(207) },
        'publicAccessBlockConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'BlockPublicAcls': { 'type': _0x3e771d(207) },
                'BlockPublicPolicy': { 'type': 'boolean' },
                'IgnorePublicAcls': { 'type': _0x3e771d(207) },
                'RestrictPublicBuckets': { 'type': _0x3e771d(207) }
            },
            'additionalProperties': ![]
        },
        'replicationConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'Role': { '$ref': _0x3e771d(229) },
                'Rules': {
                    'type': _0x3e771d(190),
                    'items': {
                        'type': _0x3e771d(168),
                        'properties': {
                            'DeleteMarkerReplication': {
                                'type': _0x3e771d(168),
                                'properties': {
                                    'Status': {
                                        'enum': [
                                            _0x3e771d(215),
                                            _0x3e771d(187)
                                        ]
                                    }
                                },
                                'additionalProperties': ![]
                            },
                            'Destination': {
                                'type': _0x3e771d(168),
                                'properties': {
                                    'AccessControlTranslation': {
                                        'type': _0x3e771d(168),
                                        'properties': { 'Owner': { 'const': _0x3e771d(192) } },
                                        'required': [_0x3e771d(234)],
                                        'additionalProperties': ![]
                                    },
                                    'Account': {
                                        'type': _0x3e771d(169),
                                        'pattern': _0x3e771d(235)
                                    },
                                    'Bucket': { '$ref': _0x3e771d(229) },
                                    'EncryptionConfiguration': {
                                        'type': _0x3e771d(168),
                                        'properties': { 'ReplicaKmsKeyID': { 'type': _0x3e771d(169) } },
                                        'required': [_0x3e771d(236)],
                                        'additionalProperties': ![]
                                    },
                                    'Metrics': {
                                        'type': 'object',
                                        'properties': {
                                            'EventThreshold': replicationTimeValue,
                                            'Status': {
                                                'enum': [
                                                    _0x3e771d(215),
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
                                                    _0x3e771d(215),
                                                    _0x3e771d(187)
                                                ]
                                            },
                                            'Time': replicationTimeValue
                                        },
                                        'required': [
                                            _0x3e771d(218),
                                            _0x3e771d(237)
                                        ],
                                        'additionalProperties': ![]
                                    },
                                    'StorageClass': {
                                        'enum': [
                                            _0x3e771d(216),
                                            'GLACIER',
                                            _0x3e771d(181),
                                            _0x3e771d(182),
                                            'OUTPOSTS',
                                            _0x3e771d(238),
                                            _0x3e771d(239),
                                            _0x3e771d(183)
                                        ]
                                    }
                                },
                                'required': [_0x3e771d(240)],
                                'additionalProperties': ![],
                                'dependencies': { 'AccessControlTranslation': [_0x3e771d(241)] }
                            },
                            'Filter': {
                                'type': _0x3e771d(168),
                                'properties': {
                                    'And': {
                                        'type': _0x3e771d(168),
                                        'properties': {
                                            'Prefix': { 'type': _0x3e771d(169) },
                                            'TagFilters': {
                                                'type': _0x3e771d(190),
                                                'items': tagFilter
                                            }
                                        },
                                        'additionalProperties': ![]
                                    },
                                    'Prefix': { 'type': _0x3e771d(169) },
                                    'TagFilter': tagFilter
                                },
                                'additionalProperties': ![]
                            },
                            'Id': {
                                'type': _0x3e771d(169),
                                'maxLength': 255
                            },
                            'Prefix': { 'type': 'string' },
                            'Priority': { 'type': _0x3e771d(213) },
                            'SourceSelectionCriteria': {
                                'type': _0x3e771d(168),
                                'properties': {
                                    'SseKmsEncryptedObjects': {
                                        'type': _0x3e771d(168),
                                        'properties': {
                                            'Status': {
                                                'enum': [
                                                    _0x3e771d(215),
                                                    _0x3e771d(187)
                                                ]
                                            }
                                        },
                                        'required': ['Status'],
                                        'additionalProperties': ![]
                                    }
                                },
                                'required': [_0x3e771d(242)],
                                'additionalProperties': ![]
                            },
                            'Status': {
                                'enum': [
                                    _0x3e771d(215),
                                    _0x3e771d(187)
                                ]
                            }
                        },
                        'required': [
                            _0x3e771d(192),
                            _0x3e771d(218)
                        ],
                        'additionalProperties': ![]
                    },
                    'minItems': 1,
                    'maxItems': 1000
                }
            },
            'required': [
                _0x3e771d(243),
                'Rules'
            ],
            'additionalProperties': ![]
        },
        'tags': {
            'type': _0x3e771d(190),
            'items': {
                'type': 'object',
                'properties': {
                    'Key': { 'type': _0x3e771d(169) },
                    'Value': { 'type': _0x3e771d(169) }
                },
                'required': [
                    _0x3e771d(175),
                    _0x3e771d(176)
                ],
                'additionalProperties': ![]
            }
        },
        'versioningConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'Status': {
                    'enum': [
                        _0x3e771d(187),
                        'Suspended'
                    ]
                }
            },
            'required': [_0x3e771d(218)],
            'additionalProperties': ![]
        },
        'websiteConfiguration': {
            'type': _0x3e771d(168),
            'properties': {
                'ErrorDocument': { 'type': _0x3e771d(169) },
                'IndexDocument': { 'type': _0x3e771d(169) },
                'RedirectAllRequestsTo': {
                    'type': _0x3e771d(168),
                    'properties': {
                        'HostName': { 'type': _0x3e771d(169) },
                        'Protocol': {
                            'enum': [
                                'http',
                                _0x3e771d(244)
                            ]
                        }
                    },
                    'required': [_0x3e771d(245)],
                    'additionalProperties': ![]
                },
                'RoutingRules': {
                    'type': _0x3e771d(190),
                    'items': {
                        'type': 'object',
                        'properties': {
                            'RedirectRule': {
                                'type': _0x3e771d(168),
                                'properties': {
                                    'HostName': { 'type': 'string' },
                                    'HttpRedirectCode': { 'type': _0x3e771d(169) },
                                    'Protocol': {
                                        'enum': [
                                            'http',
                                            _0x3e771d(244)
                                        ]
                                    },
                                    'ReplaceKeyPrefixWith': { 'type': _0x3e771d(169) },
                                    'ReplaceKeyWith': { 'type': 'string' }
                                },
                                'additionalProperties': ![]
                            },
                            'RoutingRuleCondition': {
                                'type': 'object',
                                'properties': {
                                    'HttpErrorCodeReturnedEquals': { 'type': _0x3e771d(169) },
                                    'KeyPrefixEquals': { 'type': 'string' }
                                },
                                'additionalProperties': ![]
                            }
                        },
                        'required': [_0x3e771d(246)],
                        'additionalProperties': ![]
                    }
                }
            },
            'additionalProperties': ![]
        }
    },
    'additionalProperties': ![]
};