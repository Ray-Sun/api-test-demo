export enum StatusCode {
    'CONTINUE'= 100,
    'SWITCHING_PROTOCOLS'= 101,
    'PROCESSING_WEBDAV'= 102,
    'OK'= 200,
    'CREATED'= 201,
    'ACCEPTED'= 202,
    'NON-AUTHORITATIVE_INFORMATION'= 203,
    'NO_CONTENT'= 204,
    'RESET_CONTENT'= 205,
    'PARTIAL_CONTENT'= 206,
    'MULTI-STATUS_WEBDAV'= 207,
    'ALREADY_REPORTED_WEBDAV'= 208,
    'IM_USED'= 226,
    'MULTIPLE_CHOICES'= 300,
    'MOVED_PERMANENTLY'= 301,
    'FOUND'= 302,
    'SEE_OTHER'= 303,
    'NOT_MODIFIED'= 304,
    'USE_PROXY'= 305,
    'TEMPORARY_REDIRECT'= 307,
    'PERMANENT_REDIRECT_EXPERIMENTAL'= 308,
    'BAD_REQUEST'= 400,
    'UNAUTHORIZED'= 401,
    'PAYMENT_REQUIRED'= 402,
    'FORBIDDEN'= 403,
    'NOT_FOUND'= 404,
    'METHOD_NOT_ALLOWED'= 405,
    'NOT_ACCEPTABLE'= 406,
    'PROXY_AUTHENTICATION_REQUIRED'= 407,
    'REQUEST_TIMEOUT'= 408,
    'CONFLICT'= 409,
    'GONE'= 410,
    'LENGTH_REQUIRED'= 411,
    'PRECONDITION_FAILED'= 412,
    'REQUEST_ENTITY_TOO_LARGE'= 413,
    'REQUEST-URI_TOO_LONG'= 414,
    'UNSUPPORTED_MEDIA_TYPE'= 415,
    'REQUESTED_RANGE_NOT_SATISFIABLE'= 416,
    'EXPECTATION_FAILED'= 417,
    'I_AM_A_TEAPOT_RFC_2324'= 418,
    'ENHANCE_YOUR_CALM_TWITTER'= 420,
    'UNPROCESSABLE_ENTITY_WEBDAV'= 422,
    'LOCKED_WEBDAV'= 423,
    'FAILED_DEPENDENCY_WEBDAV'= 424,
    'RESERVED_FOR_WEBDAV'= 425,
    'UPGRADE_REQUIRED'= 426,
    'PRECONDITION_REQUIRED'= 428,
    'TOO_MANY_REQUESTS'= 429,
    'REQUEST_HEADER_FIELDS_TOO_LARGE'= 431,
    'NO_RESPONSE_NGINX'= 444,
    'RETRY_WITH_MICROSOFT'= 449,
    'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT'= 450,
    'UNAVAILABLE_FOR_LEGAL_REASONS'= 451,
    'CLIENT_CLOSED_REQUEST_NGINX'= 499,
    'INTERNAL_SERVER_ERROR'= 500,
    'NOT_IMPLEMENTED'= 501,
    'BAD_GATEWAY'= 502,
    'SERVICE_UNAVAILABLE'= 503,
    'GATEWAY_TIMEOUT'= 504,
    'HTTP_VERSION_NOT_SUPPORTED'= 505,
    'VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL'= 506,
    'INSUFFICIENT_STORAGE_WEBDAV'= 507,
    'LOOP_DETECTED_WEBDAV'= 508,
    'BANDWIDTH_LIMIT_EXCEEDED_APACHE'= 509,
    'NOT_EXTENDED'= 510,
    'NETWORK_AUTHENTICATION_REQUIRED'= 511,
    'NETWORK_READ_TIMEOUT_ERROR'= 598,
    'NETWORK_CONNECT_TIMEOUT_ERROR'= 599
}