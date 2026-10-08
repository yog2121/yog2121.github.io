import csv
import json

target_ids = [
    "SIH26053", "SIH26125", "SIH26126", "SIH26167", "SIH26171", "SIH26173", "SIH26174", "SIH26117",
    "SIH26037", "SIH26045", "SIH26066", "SIH26067", "SIH26068", "SIH26069", "SIH26070", "SIH26142",
    "SIH26146", "SIH26149", "SIH26156", "SIH26158", "SIH26057", "SIH26137", "SIH26189", "SIH26190",
    "SIH26093", "SIH26094", "SIH26138", "SIH26140", "SIH26131", "SIH26132", "SIH26148", "SIH26151",
    "SIH26154", "SIH26160"
]

results = []
try:
    with open('sih-2025-ps.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row.get('ID') in target_ids or row.get('Problem Statement ID') in target_ids:
                results.append(row)
except Exception as e:
    print(f"Error reading CSV: {e}")

print(json.dumps(results, indent=2))
