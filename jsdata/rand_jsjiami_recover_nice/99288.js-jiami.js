'use strict';
const destination = {
  "properties" : {
    "BucketAccountId" : {
      "type" : "string",
      "pattern" : "\\d{12}"
    },
    "BucketArn" : {
      "$ref" : "#/definitions/awsArn"
    },
    "Format" : {
      "enum" : ["CSV", "ORC", "Parquet"]
    },
    "Prefix" : {
      "type" : "string"
    }
  },
  "required" : ["BucketArn", "Format"],
  "additionalProperties" : ![]
};
const tagFilter = {
  "properties" : {
    "Key" : {
      "type" : "string"
    },
    "Value" : {
      "type" : "string"
    }
  },
  "required" : ["Key", "Value"],
  "additionalProperties" : ![]
};
const notificationFilter = {
  "properties" : {
    "S3Key" : {
      "type" : "object",
      "properties" : {
        "Rules" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "Name" : {
                "enum" : ["prefix", "suffix"]
              },
              "Value" : {
                "type" : "string"
              }
            },
            "required" : ["Name", "Value"],
            "additionalProperties" : ![]
          }
        }
      },
      "required" : ["Rules"],
      "additionalProperties" : ![]
    }
  },
  "required" : ["S3Key"],
  "additionalProperties" : ![]
};
const noncurrentVersionTransition = {
  "properties" : {
    "StorageClass" : {
      "enum" : ["DEEP_ARCHIVE", "GLACIER", "INTELLIGENT_TIERING", "ONEZONE_IA", "STANDARD_IA"]
    },
    "TransitionInDays" : {
      "type" : "integer",
      "minimum" : 0
    }
  },
  "required" : ["StorageClass", "TransitionInDays"],
  "additionalProperties" : ![]
};
const replicationTimeValue = {
  "properties" : {
    "Minutes" : {
      "type" : "integer",
      "minimum" : 0
    }
  },
  "required" : ["Minutes"],
  "additionalProperties" : ![]
};
module["exports"] = {
  "type" : "object",
  "properties" : {
    "accelerateConfiguration" : {
      "type" : "object",
      "properties" : {
        "AccelerationStatus" : {
          "enum" : ["Enabled", "Suspended"]
        }
      },
      "required" : ["AccelerationStatus"],
      "additionalProperties" : ![]
    },
    "accessControl" : {
      "type" : "string"
    },
    "analyticsConfigurations" : {
      "type" : "array",
      "items" : {
        "type" : "object",
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
                "type" : "object",
                "properties" : {
                  "Destination" : destination,
                  "OutputSchemaVersion" : {
                    "const" : "V_1"
                  }
                },
                "required" : ["Destination", "OutputSchemaVersion"],
                "additionalProperties" : ![]
              }
            },
            "additionalProperties" : ![]
          },
          "TagFilters" : {
            "type" : "array",
            "items" : tagFilter
          }
        },
        "required" : ["Id", "StorageClassAnalysis"],
        "additionalProperties" : ![]
      }
    },
    "bucketEncryption" : {
      "type" : "object",
      "properties" : {
        "ServerSideEncryptionConfiguration" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "ServerSideEncryptionByDefault" : {
                "type" : "object",
                "properties" : {
                  "KMSMasterKeyID" : {
                    "anyOf" : [{
                      "$ref" : "#/definitions/awsArn"
                    }, {
                      "type" : "string",
                      "pattern" : "^[a-f0-9-]+$"
                    }]
                  },
                  "SSEAlgorithm" : {
                    "enum" : ["AES256", "aws:kms"]
                  }
                },
                "required" : ["SSEAlgorithm"],
                "additionalProperties" : ![]
              }
            },
            "additionalProperties" : ![]
          }
        }
      },
      "required" : ["ServerSideEncryptionConfiguration"],
      "additionalProperties" : ![]
    },
    "bucketName" : {
      "$ref" : "#/definitions/awsS3BucketName"
    },
    "corsConfiguration" : {
      "type" : "object",
      "properties" : {
        "CorsRules" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "AllowedHeaders" : {
                "type" : "array",
                "items" : {
                  "type" : "string"
                }
              },
              "AllowedMethods" : {
                "type" : "array",
                "items" : {
                  "enum" : ["GET", "PUT", "HEAD", "POST", "DELETE"]
                }
              },
              "AllowedOrigins" : {
                "type" : "array",
                "items" : {
                  "type" : "string"
                }
              },
              "ExposedHeaders" : {
                "type" : "array",
                "items" : {
                  "type" : "string"
                }
              },
              "Id" : {
                "type" : "string",
                "maxLength" : 255
              },
              "MaxAge" : {
                "type" : "integer",
                "minimum" : 0
              }
            },
            "required" : ["AllowedMethods", "AllowedOrigins"],
            "additionalProperties" : ![]
          },
          "maxItems" : 100
        }
      },
      "required" : ["CorsRules"],
      "additionalProperties" : ![]
    },
    "inventoryConfigurations" : {
      "type" : "array",
      "items" : {
        "type" : "object",
        "properties" : {
          "Destination" : destination,
          "Enabled" : {
            "type" : "boolean"
          },
          "Id" : {
            "type" : "string"
          },
          "IncludedObjectVersions" : {
            "enum" : ["All", "Current"]
          },
          "OptionalFields" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Prefix" : {
            "type" : "string"
          },
          "ScheduleFrequency" : {
            "enum" : ["Daily", "Weekly"]
          }
        },
        "required" : ["Destination", "Enabled", "Id", "IncludedObjectVersions", "ScheduleFrequency"],
        "additionalProperties" : ![]
      }
    },
    "lifecycleConfiguration" : {
      "type" : "object",
      "properties" : {
        "Rules" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "AbortIncompleteMultipartUpload" : {
                "type" : "object",
                "properties" : {
                  "DaysAfterInitiation" : {
                    "type" : "integer",
                    "minimum" : 0
                  }
                },
                "required" : ["DaysAfterInitiation"],
                "additionalProperties" : ![]
              },
              "ExpirationDate" : {
                "type" : "string",
                "format" : "date-time"
              },
              "ExpirationInDays" : {
                "type" : "integer",
                "minimum" : 0
              },
              "Id" : {
                "type" : "string",
                "maxLength" : 255
              },
              "NoncurrentVersionExpirationInDays" : {
                "type" : "integer",
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
                "enum" : ["Disabled", "Enabled"]
              },
              "TagFilters" : {
                "type" : "array",
                "items" : tagFilter
              },
              "Transitions" : {
                "type" : "array",
                "items" : {
                  "type" : "object",
                  "properties" : {
                    "StorageClass" : {
                      "enum" : ["DEEP_ARCHIVE", "GLACIER", "INTELLIGENT_TIERING", "ONEZONE_IA", "STANDARD_IA"]
                    },
                    "TransitionDate" : {
                      "type" : "string",
                      "format" : "date-time"
                    },
                    "TransitionInDays" : {
                      "type" : "integer",
                      "minimum" : 1
                    }
                  },
                  "required" : ["StorageClass"],
                  "additionalProperties" : ![]
                }
              }
            },
            "required" : ["Status"],
            "anyOf" : ["AbortIncompleteMultipartUpload", "ExpirationDate", "ExpirationInDays", "NoncurrentVersionExpirationInDays", "NoncurrentVersionTransition", "NoncurrentVersionTransitions", "Transition", "Transitions"]["map"]((validator) => {
              return {
                "required" : [validator]
              };
            }),
            "additionalProperties" : ![]
          }
        }
      },
      "required" : ["Rules"],
      "additionalProperties" : ![]
    },
    "loggingConfiguration" : {
      "type" : "object",
      "properties" : {
        "DestinationBucketName" : {
          "anyOf" : [{
            "$ref" : "#/definitions/awsS3BucketName"
          }, {
            "$ref" : "#/definitions/awsCfFunction"
          }]
        },
        "LogFilePrefix" : {
          "type" : "string"
        }
      },
      "additionalProperties" : ![]
    },
    "metricsConfigurations" : {
      "type" : "array",
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
            "type" : "array",
            "items" : tagFilter
          }
        },
        "required" : ["Id"],
        "additionalProperties" : ![]
      }
    },
    "name" : {
      "$ref" : "#/definitions/awsS3BucketName"
    },
    "notificationConfiguration" : {
      "type" : "object",
      "properties" : {
        "LambdaConfigurations" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "Event" : {
                "type" : "string",
                "pattern" : "^s3:"
              },
              "Filter" : notificationFilter,
              "Function" : {
                "$ref" : "#/definitions/awsArn"
              }
            },
            "required" : ["Event", "Function"],
            "additionalProperties" : ![]
          }
        },
        "QueueConfigurations" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "Event" : {
                "type" : "string",
                "pattern" : "^s3:"
              },
              "Filter" : notificationFilter,
              "Queue" : {
                "$ref" : "#/definitions/awsArn"
              }
            },
            "required" : ["Event", "Queue"],
            "additionalProperties" : ![]
          }
        },
        "TopicConfigurations" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "Event" : {
                "type" : "string",
                "pattern" : "^s3:"
              },
              "Filter" : notificationFilter,
              "Topic" : {
                "$ref" : "#/definitions/awsArn"
              }
            },
            "required" : ["Event", "Topic"],
            "additionalProperties" : ![]
          }
        }
      },
      "additionalProperties" : ![]
    },
    "objectLockConfiguration" : {
      "type" : "object",
      "properties" : {
        "ObjectLockEnabled" : {
          "const" : "Enabled"
        },
        "Rule" : {
          "type" : "object",
          "properties" : {
            "DefaultRetention" : {
              "type" : "object",
              "properties" : {
                "Days" : {
                  "type" : "integer",
                  "minimum" : 0
                },
                "Mode" : {
                  "enum" : ["COMPLIANCE", "GOVERNANCE"]
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
      "type" : "boolean"
    },
    "publicAccessBlockConfiguration" : {
      "type" : "object",
      "properties" : {
        "BlockPublicAcls" : {
          "type" : "boolean"
        },
        "BlockPublicPolicy" : {
          "type" : "boolean"
        },
        "IgnorePublicAcls" : {
          "type" : "boolean"
        },
        "RestrictPublicBuckets" : {
          "type" : "boolean"
        }
      },
      "additionalProperties" : ![]
    },
    "replicationConfiguration" : {
      "type" : "object",
      "properties" : {
        "Role" : {
          "$ref" : "#/definitions/awsArn"
        },
        "Rules" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "DeleteMarkerReplication" : {
                "type" : "object",
                "properties" : {
                  "Status" : {
                    "enum" : ["Disabled", "Enabled"]
                  }
                },
                "additionalProperties" : ![]
              },
              "Destination" : {
                "type" : "object",
                "properties" : {
                  "AccessControlTranslation" : {
                    "type" : "object",
                    "properties" : {
                      "Owner" : {
                        "const" : "Destination"
                      }
                    },
                    "required" : ["Owner"],
                    "additionalProperties" : ![]
                  },
                  "Account" : {
                    "type" : "string",
                    "pattern" : "^\\d{12}$"
                  },
                  "Bucket" : {
                    "$ref" : "#/definitions/awsArn"
                  },
                  "EncryptionConfiguration" : {
                    "type" : "object",
                    "properties" : {
                      "ReplicaKmsKeyID" : {
                        "type" : "string"
                      }
                    },
                    "required" : ["ReplicaKmsKeyID"],
                    "additionalProperties" : ![]
                  },
                  "Metrics" : {
                    "type" : "object",
                    "properties" : {
                      "EventThreshold" : replicationTimeValue,
                      "Status" : {
                        "enum" : ["Disabled", "Enabled"]
                      }
                    },
                    "required" : ["EventThreshold", "Status"],
                    "additionalProperties" : ![]
                  },
                  "ReplicationTime" : {
                    "type" : "object",
                    "properties" : {
                      "Status" : {
                        "enum" : ["Disabled", "Enabled"]
                      },
                      "Time" : replicationTimeValue
                    },
                    "required" : ["Status", "Time"],
                    "additionalProperties" : ![]
                  },
                  "StorageClass" : {
                    "enum" : ["DEEP_ARCHIVE", "GLACIER", "INTELLIGENT_TIERING", "ONEZONE_IA", "OUTPOSTS", "REDUCED_REDUNDANCY", "STANDARD", "STANDARD_IA"]
                  }
                },
                "required" : ["Bucket"],
                "additionalProperties" : ![],
                "dependencies" : {
                  "AccessControlTranslation" : ["Account"]
                }
              },
              "Filter" : {
                "type" : "object",
                "properties" : {
                  "And" : {
                    "type" : "object",
                    "properties" : {
                      "Prefix" : {
                        "type" : "string"
                      },
                      "TagFilters" : {
                        "type" : "array",
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
                "type" : "string"
              },
              "Priority" : {
                "type" : "integer"
              },
              "SourceSelectionCriteria" : {
                "type" : "object",
                "properties" : {
                  "SseKmsEncryptedObjects" : {
                    "type" : "object",
                    "properties" : {
                      "Status" : {
                        "enum" : ["Disabled", "Enabled"]
                      }
                    },
                    "required" : ["Status"],
                    "additionalProperties" : ![]
                  }
                },
                "required" : ["SseKmsEncryptedObjects"],
                "additionalProperties" : ![]
              },
              "Status" : {
                "enum" : ["Disabled", "Enabled"]
              }
            },
            "required" : ["Destination", "Status"],
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
      "type" : "array",
      "items" : {
        "type" : "object",
        "properties" : {
          "Key" : {
            "type" : "string"
          },
          "Value" : {
            "type" : "string"
          }
        },
        "required" : ["Key", "Value"],
        "additionalProperties" : ![]
      }
    },
    "versioningConfiguration" : {
      "type" : "object",
      "properties" : {
        "Status" : {
          "enum" : ["Enabled", "Suspended"]
        }
      },
      "required" : ["Status"],
      "additionalProperties" : ![]
    },
    "websiteConfiguration" : {
      "type" : "object",
      "properties" : {
        "ErrorDocument" : {
          "type" : "string"
        },
        "IndexDocument" : {
          "type" : "string"
        },
        "RedirectAllRequestsTo" : {
          "type" : "object",
          "properties" : {
            "HostName" : {
              "type" : "string"
            },
            "Protocol" : {
              "enum" : ["http", "https"]
            }
          },
          "required" : ["HostName"],
          "additionalProperties" : ![]
        },
        "RoutingRules" : {
          "type" : "array",
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
                    "type" : "string"
                  },
                  "Protocol" : {
                    "enum" : ["http", "https"]
                  },
                  "ReplaceKeyPrefixWith" : {
                    "type" : "string"
                  },
                  "ReplaceKeyWith" : {
                    "type" : "string"
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
                    "type" : "string"
                  }
                },
                "additionalProperties" : ![]
              }
            },
            "required" : ["RedirectRule"],
            "additionalProperties" : ![]
          }
        }
      },
      "additionalProperties" : ![]
    }
  },
  "additionalProperties" : ![]
};

