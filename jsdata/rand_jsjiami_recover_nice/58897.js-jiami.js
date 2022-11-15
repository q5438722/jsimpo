'use strict';
assertFalse(/\u017f/i["test"]("\u017f"["toUpperCase"]()));
assertFalse(/\u017f/i["test"]("\u017f"["toUpperCase"]()[0]));
assertTrue(/\u017f/i["test"]("\u017f"));
assertTrue(/\u017f/i["test"]("\u017f"[0]));
assertFalse(/\u017f/i["test"]("s"["toUpperCase"]()));
assertFalse(/\u017f/i["test"]("s"["toUpperCase"]()[0]));
assertFalse(/\u017f/i["test"]("S"["toUpperCase"]()));
assertFalse(/\u017f/i["test"]("S"["toUpperCase"]()[0]));
assertFalse(/\u017f/i["test"]("S"));
assertFalse(/\u017f/i["test"]("S"[0]));

