import json

target_ids = [
    "SIH26053", "SIH26125", "SIH26126", "SIH26167", "SIH26171", "SIH26173", "SIH26174", "SIH26117",
    "SIH26037", "SIH26045", "SIH26066", "SIH26067", "SIH26068", "SIH26069", "SIH26070", "SIH26142",
    "SIH26146", "SIH26149", "SIH26156", "SIH26158", "SIH26057", "SIH26137", "SIH26189", "SIH26190",
    "SIH26093", "SIH26094", "SIH26138", "SIH26140", "SIH26131", "SIH26132", "SIH26148", "SIH26151",
    "SIH26154", "SIH26160"
]

with open('sih2026_problem_statements.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

results = []
for item in data:
    ps_id = item.get('ps_number') or item.get('Problem_Statement_ID')
    if ps_id in target_ids:
        results.append({
            'ID': ps_id,
            'Title': item.get('title') or item.get('Problem_Statement_Title'),
            'Description': item.get('description') or item.get('Description'),
            'Theme': item.get('theme') or item.get('Theme'),
            'Department': item.get('department') or item.get('Department'),
        })

with open('extracted_ps.json', 'w', encoding='utf-8') as out:
    json.dump(results, out, indent=2)

print(f"Extracted {len(results)} problem statements.")
