'use strict';
const destination = {
  "type" : "object",
  "properties" : {
    "BucketAccountId" : {
      "type" : "string",
      "pattern" : _0x31a490(476)
    },
    "BucketArn" : {
      "$ref" : _0x31a490(477)
    },
    "Format" : {
      "enum" : ["CSV", _0x31a490(478), "Parquet"]
    },
    "Prefix" : {
      "type" : "string"
    }
  },
  "required" : [_0x31a490(479), "Format"],
  "additionalProperties" : ![]
};
const tagFilter = {
  "type" : _0x31a490(480),
  "properties" : {
    "Key" : {
      "type" : _0x31a490(481)
    },
    "Value" : {
      "type" : _0x31a490(481)
    }
  },
  "required" : [_0x31a490(482), _0x31a490(483)],
  "additionalProperties" : ![]
};
const notificationFilter = {
  "type" : "object",
  "properties" : {
    "S3Key" : {
      "type" : _0x31a490(480),
      "properties" : {
        "Rules" : {
          "type" : _0x31a490(484),
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "Name" : {
                "enum" : [_0x31a490(485), _0x31a490(486)]
              },
              "Value" : {
                "type" : _0x31a490(481)
              }
            },
            "required" : [_0x31a490(487), _0x31a490(483)],
            "additionalProperties" : ![]
          }
        }
      },
      "required" : [_0x31a490(488)],
      "additionalProperties" : ![]
    }
  },
  "required" : [_0x31a490(489)],
  "additionalProperties" : ![]
};
const noncurrentVersionTransition = {
  "type" : "object",
  "properties" : {
    "StorageClass" : {
      "enum" : [_0x31a490(490), "GLACIER", _0x31a490(491), _0x31a490(492), _0x31a490(493)]
    },
    "TransitionInDays" : {
      "type" : "integer",
      "minimum" : 0
    }
  },
  "required" : [_0x31a490(494), "TransitionInDays"],
  "additionalProperties" : ![]
};
const replicationTimeValue = {
  "type" : "object",
  "properties" : {
    "Minutes" : {
      "type" : "integer",
      "minimum" : 0
    }
  },
  "required" : [_0x31a490(495)],
  "additionalProperties" : ![]
};
module[_0x31a490(496)] = {
  "type" : _0x31a490(480),
  "properties" : {
    "accelerateConfiguration" : {
      "type" : _0x31a490(480),
      "properties" : {
        "AccelerationStatus" : {
          "enum" : ["Enabled", "Suspended"]
        }
      },
      "required" : [_0x31a490(497)],
      "additionalProperties" : ![]
    },
    "accessControl" : {
      "type" : _0x31a490(481)
    },
    "analyticsConfigurations" : {
      "type" : _0x31a490(484),
      "items" : {
        "type" : _0x31a490(480),
        "properties" : {
          "Id" : {
            "type" : "string"
          },
          "Prefix" : {
            "type" : "string"
          },
          "StorageClassAnalysis" : {
            "type" : "object",
            "properties" : {
              "DataExport" : {
                "type" : _0x31a490(480),
                "properties" : {
                  "Destination" : destination,
                  "OutputSchemaVersion" : {
                    "const" : _0x31a490(498)
                  }
                },
                "required" : [_0x31a490(499), _0x31a490(500)],
                "additionalProperties" : ![]
              }
            },
            "additionalProperties" : ![]
          },
          "TagFilters" : {
            "type" : _0x31a490(484),
            "items" : tagFilter
          }
        },
        "required" : ["Id", _0x31a490(501)],
        "additionalProperties" : ![]
      }
    },
    "bucketEncryption" : {
      "type" : _0x31a490(480),
      "properties" : {
        "ServerSideEncryptionConfiguration" : {
          "type" : "array",
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "ServerSideEncryptionByDefault" : {
                "type" : "object",
                "properties" : {
                  "KMSMasterKeyID" : {
                    "anyOf" : [{
                      "$ref" : _0x31a490(477)
                    }, {
                      "type" : "string",
                      "pattern" : _0x31a490(502)
                    }]
                  },
                  "SSEAlgorithm" : {
                    "enum" : ["AES256", "aws:kms"]
                  }
                },
                "required" : [_0x31a490(503)],
                "additionalProperties" : ![]
              }
            },
            "additionalProperties" : ![]
          }
        }
      },
      "required" : [_0x31a490(504)],
      "additionalProperties" : ![]
    },
    "bucketName" : {
      "$ref" : _0x31a490(505)
    },
    "corsConfiguration" : {
      "type" : "object",
      "properties" : {
        "CorsRules" : {
          "type" : "array",
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "AllowedHeaders" : {
                "type" : _0x31a490(484),
                "items" : {
                  "type" : _0x31a490(481)
                }
              },
              "AllowedMethods" : {
                "type" : _0x31a490(484),
                "items" : {
                  "enum" : [_0x31a490(506), "PUT", _0x31a490(507), _0x31a490(508), _0x31a490(509)]
                }
              },
              "AllowedOrigins" : {
                "type" : "array",
                "items" : {
                  "type" : _0x31a490(481)
                }
              },
              "ExposedHeaders" : {
                "type" : _0x31a490(484),
                "items" : {
                  "type" : _0x31a490(481)
                }
              },
              "Id" : {
                "type" : _0x31a490(481),
                "maxLength" : 255
              },
              "MaxAge" : {
                "type" : _0x31a490(510),
                "minimum" : 0
              }
            },
            "required" : [_0x31a490(511), "AllowedOrigins"],
            "additionalProperties" : ![]
          },
          "maxItems" : 100
        }
      },
      "required" : [_0x31a490(512)],
      "additionalProperties" : ![]
    },
    "inventoryConfigurations" : {
      "type" : "array",
      "items" : {
        "type" : _0x31a490(480),
        "properties" : {
          "Destination" : destination,
          "Enabled" : {
            "type" : _0x31a490(513)
          },
          "Id" : {
            "type" : _0x31a490(481)
          },
          "IncludedObjectVersions" : {
            "enum" : [_0x31a490(514), _0x31a490(515)]
          },
          "OptionalFields" : {
            "type" : "array",
            "items" : {
              "type" : _0x31a490(481)
            }
          },
          "Prefix" : {
            "type" : _0x31a490(481)
          },
          "ScheduleFrequency" : {
            "enum" : [_0x31a490(516), _0x31a490(517)]
          }
        },
        "required" : [_0x31a490(499), _0x31a490(518), "Id", _0x31a490(519), _0x31a490(520)],
        "additionalProperties" : ![]
      }
    },
    "lifecycleConfiguration" : {
      "type" : "object",
      "properties" : {
        "Rules" : {
          "type" : "array",
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "AbortIncompleteMultipartUpload" : {
                "type" : _0x31a490(480),
                "properties" : {
                  "DaysAfterInitiation" : {
                    "type" : _0x31a490(510),
                    "minimum" : 0
                  }
                },
                "required" : [_0x31a490(521)],
                "additionalProperties" : ![]
              },
              "ExpirationDate" : {
                "type" : "string",
                "format" : _0x31a490(522)
              },
              "ExpirationInDays" : {
                "type" : "integer",
                "minimum" : 0
              },
              "Id" : {
                "type" : _0x31a490(481),
                "maxLength" : 255
              },
              "NoncurrentVersionExpirationInDays" : {
                "type" : _0x31a490(510),
                "minimum" : 0
              },
              "NoncurrentVersionTransition" : noncurrentVersionTransition,
              "NoncurrentVersionTransitions" : {
                "type" : "array",
                "items" : noncurrentVersionTransition
              },
              "Prefix" : {
                "type" : "string"
              },
              "Status" : {
                "enum" : ["Disabled", _0x31a490(518)]
              },
              "TagFilters" : {
                "type" : "array",
                "items" : tagFilter
              },
              "Transitions" : {
                "type" : _0x31a490(484),
                "items" : {
                  "type" : _0x31a490(480),
                  "properties" : {
                    "StorageClass" : {
                      "enum" : [_0x31a490(490), _0x31a490(523), "INTELLIGENT_TIERING", _0x31a490(492), _0x31a490(493)]
                    },
                    "TransitionDate" : {
                      "type" : _0x31a490(481),
                      "format" : _0x31a490(522)
                    },
                    "TransitionInDays" : {
                      "type" : _0x31a490(510),
                      "minimum" : 1
                    }
                  },
                  "required" : [_0x31a490(494)],
                  "additionalProperties" : ![]
                }
              }
            },
            "required" : [_0x31a490(524)],
            "anyOf" : ["AbortIncompleteMultipartUpload", _0x31a490(525), _0x31a490(526), _0x31a490(527), "NoncurrentVersionTransition", _0x31a490(528), _0x31a490(529), "Transitions"][_0x31a490(530)]((validator) => {
              return {
                "required" : [validator]
              };
            }),
            "additionalProperties" : ![]
          }
        }
      },
      "required" : [_0x31a490(488)],
      "additionalProperties" : ![]
    },
    "loggingConfiguration" : {
      "type" : _0x31a490(480),
      "properties" : {
        "DestinationBucketName" : {
          "anyOf" : [{
            "$ref" : "#/definitions/awsS3BucketName"
          }, {
            "$ref" : _0x31a490(531)
          }]
        },
        "LogFilePrefix" : {
          "type" : _0x31a490(481)
        }
      },
      "additionalProperties" : ![]
    },
    "metricsConfigurations" : {
      "type" : _0x31a490(484),
      "items" : {
        "type" : "object",
        "properties" : {
          "Id" : {
            "type" : "string"
          },
          "Prefix" : {
            "type" : "string"
          },
          "TagFilters" : {
            "type" : _0x31a490(484),
            "items" : tagFilter
          }
        },
        "required" : ["Id"],
        "additionalProperties" : ![]
      }
    },
    "name" : {
      "$ref" : _0x31a490(505)
    },
    "notificationConfiguration" : {
      "type" : _0x31a490(480),
      "properties" : {
        "LambdaConfigurations" : {
          "type" : _0x31a490(484),
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "Event" : {
                "type" : _0x31a490(481),
                "pattern" : "^s3:"
              },
              "Filter" : notificationFilter,
              "Function" : {
                "$ref" : _0x31a490(477)
              }
            },
            "required" : [_0x31a490(532), _0x31a490(533)],
            "additionalProperties" : ![]
          }
        },
        "QueueConfigurations" : {
          "type" : _0x31a490(484),
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "Event" : {
                "type" : "string",
                "pattern" : _0x31a490(534)
              },
              "Filter" : notificationFilter,
              "Queue" : {
                "$ref" : "#/definitions/awsArn"
              }
            },
            "required" : [_0x31a490(532), _0x31a490(535)],
            "additionalProperties" : ![]
          }
        },
        "TopicConfigurations" : {
          "type" : _0x31a490(484),
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "Event" : {
                "type" : "string",
                "pattern" : "^s3:"
              },
              "Filter" : notificationFilter,
              "Topic" : {
                "$ref" : _0x31a490(477)
              }
            },
            "required" : ["Event", _0x31a490(536)],
            "additionalProperties" : ![]
          }
        }
      },
      "additionalProperties" : ![]
    },
    "objectLockConfiguration" : {
      "type" : _0x31a490(480),
      "properties" : {
        "ObjectLockEnabled" : {
          "const" : "Enabled"
        },
        "Rule" : {
          "type" : _0x31a490(480),
          "properties" : {
            "DefaultRetention" : {
              "type" : _0x31a490(480),
              "properties" : {
                "Days" : {
                  "type" : "integer",
                  "minimum" : 0
                },
                "Mode" : {
                  "enum" : ["COMPLIANCE", _0x31a490(537)]
                },
                "Years" : {
                  "type" : "integer",
                  "minimum" : 0
                }
              },
              "additionalProperties" : ![]
            }
          },
          "additionalProperties" : ![]
        }
      },
      "additionalProperties" : ![]
    },
    "objectLockEnabled" : {
      "type" : _0x31a490(513)
    },
    "publicAccessBlockConfiguration" : {
      "type" : _0x31a490(480),
      "properties" : {
        "BlockPublicAcls" : {
          "type" : "boolean"
        },
        "BlockPublicPolicy" : {
          "type" : _0x31a490(513)
        },
        "IgnorePublicAcls" : {
          "type" : "boolean"
        },
        "RestrictPublicBuckets" : {
          "type" : _0x31a490(513)
        }
      },
      "additionalProperties" : ![]
    },
    "replicationConfiguration" : {
      "type" : "object",
      "properties" : {
        "Role" : {
          "$ref" : _0x31a490(477)
        },
        "Rules" : {
          "type" : _0x31a490(484),
          "items" : {
            "type" : _0x31a490(480),
            "properties" : {
              "DeleteMarkerReplication" : {
                "type" : _0x31a490(480),
                "properties" : {
                  "Status" : {
                    "enum" : [_0x31a490(538), _0x31a490(518)]
                  }
                },
                "additionalProperties" : ![]
              },
              "Destination" : {
                "type" : _0x31a490(480),
                "properties" : {
                  "AccessControlTranslation" : {
                    "type" : "object",
                    "properties" : {
                      "Owner" : {
                        "const" : _0x31a490(499)
                      }
                    },
                    "required" : ["Owner"],
                    "additionalProperties" : ![]
                  },
                  "Account" : {
                    "type" : "string",
                    "pattern" : _0x31a490(539)
                  },
                  "Bucket" : {
                    "$ref" : "#/definitions/awsArn"
                  },
                  "EncryptionConfiguration" : {
                    "type" : "object",
                    "properties" : {
                      "ReplicaKmsKeyID" : {
                        "type" : _0x31a490(481)
                      }
                    },
                    "required" : [_0x31a490(540)],
                    "additionalProperties" : ![]
                  },
                  "Metrics" : {
                    "type" : _0x31a490(480),
                    "properties" : {
                      "EventThreshold" : replicationTimeValue,
                      "Status" : {
                        "enum" : [_0x31a490(538), _0x31a490(518)]
                      }
                    },
                    "required" : ["EventThreshold", _0x31a490(524)],
                    "additionalProperties" : ![]
                  },
                  "ReplicationTime" : {
                    "type" : "object",
                    "properties" : {
                      "Status" : {
                        "enum" : [_0x31a490(538), _0x31a490(518)]
                      },
                      "Time" : replicationTimeValue
                    },
                    "required" : ["Status", "Time"],
                    "additionalProperties" : ![]
                  },
                  "StorageClass" : {
                    "enum" : [_0x31a490(490), _0x31a490(523), _0x31a490(491), "ONEZONE_IA", _0x31a490(541), _0x31a490(542), _0x31a490(543), "STANDARD_IA"]
                  }
                },
                "required" : [_0x31a490(544)],
                "additionalProperties" : ![],
                "dependencies" : {
                  "AccessControlTranslation" : [_0x31a490(545)]
                }
              },
              "Filter" : {
                "type" : _0x31a490(480),
                "properties" : {
                  "And" : {
                    "type" : "object",
                    "properties" : {
                      "Prefix" : {
                        "type" : "string"
                      },
                      "TagFilters" : {
                        "type" : _0x31a490(484),
                        "items" : tagFilter
                      }
                    },
                    "additionalProperties" : ![]
                  },
                  "Prefix" : {
                    "type" : "string"
                  },
                  "TagFilter" : tagFilter
                },
                "additionalProperties" : ![]
              },
              "Id" : {
                "type" : "string",
                "maxLength" : 255
              },
              "Prefix" : {
                "type" : _0x31a490(481)
              },
              "Priority" : {
                "type" : _0x31a490(510)
              },
              "SourceSelectionCriteria" : {
                "type" : _0x31a490(480),
                "properties" : {
                  "SseKmsEncryptedObjects" : {
                    "type" : _0x31a490(480),
                    "properties" : {
                      "Status" : {
                        "enum" : [_0x31a490(538), _0x31a490(518)]
                      }
                    },
                    "required" : [_0x31a490(524)],
                    "additionalProperties" : ![]
                  }
                },
                "required" : [_0x31a490(546)],
                "additionalProperties" : ![]
              },
              "Status" : {
                "enum" : [_0x31a490(538), _0x31a490(518)]
              }
            },
            "required" : [_0x31a490(499), "Status"],
            "additionalProperties" : ![]
          },
          "minItems" : 1,
          "maxItems" : 1000
        }
      },
      "required" : ["Role", "Rules"],
      "additionalProperties" : ![]
    },
    "tags" : {
      "type" : _0x31a490(484),
      "items" : {
        "type" : _0x31a490(480),
        "properties" : {
          "Key" : {
            "type" : _0x31a490(481)
          },
          "Value" : {
            "type" : _0x31a490(481)
          }
        },
        "required" : ["Key", _0x31a490(483)],
        "additionalProperties" : ![]
      }
    },
    "versioningConfiguration" : {
      "type" : _0x31a490(480),
      "properties" : {
        "Status" : {
          "enum" : [_0x31a490(518), _0x31a490(547)]
        }
      },
      "required" : ["Status"],
      "additionalProperties" : ![]
    },
    "websiteConfiguration" : {
      "type" : "object",
      "properties" : {
        "ErrorDocument" : {
          "type" : _0x31a490(481)
        },
        "IndexDocument" : {
          "type" : "string"
        },
        "RedirectAllRequestsTo" : {
          "type" : _0x31a490(480),
          "properties" : {
            "HostName" : {
              "type" : _0x31a490(481)
            },
            "Protocol" : {
              "enum" : [_0x31a490(548), _0x31a490(549)]
            }
          },
          "required" : ["HostName"],
          "additionalProperties" : ![]
        },
        "RoutingRules" : {
          "type" : _0x31a490(484),
          "items" : {
            "type" : "object",
            "properties" : {
              "RedirectRule" : {
                "type" : "object",
                "properties" : {
                  "HostName" : {
                    "type" : "string"
                  },
                  "HttpRedirectCode" : {
                    "type" : _0x31a490(481)
                  },
                  "Protocol" : {
                    "enum" : [_0x31a490(548), "https"]
                  },
                  "ReplaceKeyPrefixWith" : {
                    "type" : _0x31a490(481)
                  },
                  "ReplaceKeyWith" : {
                    "type" : _0x31a490(481)
                  }
                },
                "additionalProperties" : ![]
              },
              "RoutingRuleCondition" : {
                "type" : "object",
                "properties" : {
                  "HttpErrorCodeReturnedEquals" : {
                    "type" : "string"
                  },
                  "KeyPrefixEquals" : {
                    "type" : _0x31a490(481)
                  }
                },
                "additionalProperties" : ![]
              }
            },
            "required" : [_0x31a490(550)],
            "additionalProperties" : ![]
          }
        }
      },
      "additionalProperties" : ![]
    }
  },
  "additionalProperties" : ![]
};

