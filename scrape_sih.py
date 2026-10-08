import subprocess
import json
import re
from bs4 import BeautifulSoup

def scrape_sih_portal():
    print("Fetching live problem statements from SIH portal (https://sih.gov.in/sih2026PS)...")
    cmd = ['curl', '-k', '-s', 'https://sih.gov.in/sih2026PS']
    try:
        html = subprocess.check_output(cmd).decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching portal html: {e}")
        return []

    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find('table', {'id': 'dataTablePS'})
    if not table:
        table = soup.find('table')

    if not table:
        print("Error: Could not locate problem statement table in portal HTML.")
        return []

    tbody = table.find('tbody')
    rows = tbody.find_all('tr', recursive=False) if tbody else table.find_all('tr', recursive=False)

    problem_statements = []

    for r in rows:
        cols = r.find_all('td', recursive=False)
        if len(cols) < 8:
            continue

        s_no = cols[0].get_text(strip=True)
        org = cols[1].get_text(strip=True)

        title_td = cols[2]
        modal = title_td.find('div', class_=lambda c: c and 'modal' in c)

        description = ""
        department = org
        youtube_link = ""
        dataset_link = ""

        if modal:
            # Extract detailed fields from modal content before removing it
            modal_text = modal.get_text("\n", strip=True)
            
            # Extract Description
            desc_match = re.search(r'Description\s*(.*?)(?=Organization|Department|Category|Theme|Youtube Link|Dataset Link|Contact info|$)', modal_text, re.DOTALL | re.IGNORECASE)
            if desc_match:
                description = desc_match.group(1).strip()
            
            # Extract Department
            dept_match = re.search(r'Department\s*([^\n]+)', modal_text, re.IGNORECASE)
            if dept_match:
                department = dept_match.group(1).strip()

            # Extract Youtube Link
            yt_match = re.search(r'Youtube Link\s*([^\n]+)', modal_text, re.IGNORECASE)
            if yt_match and yt_match.group(1).strip() not in ["N/A", "NA", "Dataset Link"]:
                youtube_link = yt_match.group(1).strip()

            # Extract Dataset Link
            ds_match = re.search(r'Dataset Link\s*([^\n]+)', modal_text, re.IGNORECASE)
            if ds_match and ds_match.group(1).strip() not in ["N/A", "NA", "Contact info"]:
                dataset_link = ds_match.group(1).strip()

            modal.decompose()

        title = title_td.get_text(strip=True)
        category = cols[3].get_text(strip=True)
        ps_number = cols[4].get_text(strip=True)
        ideas_count = cols[5].get_text(strip=True)
        theme = cols[6].get_text(strip=True)
        deadline = cols[7].get_text(strip=True)

        if not ps_number:
            continue

        if not description:
            description = title

        problem_statements.append({
            "Category": category,
            "Dataset_Links": dataset_link,
            "Department": department,
            "Description": description,
            "Organization": org,
            "Problem_Statement_ID": ps_number,
            "Problem_Statement_Title": title,
            "Theme": theme,
            "Youtube_Links": youtube_link,
            "Submitted_Ideas": ideas_count,
            "Deadline": deadline
        })

    print(f"Scraped {len(problem_statements)} problem statements directly from SIH portal.")
    return problem_statements

if __name__ == "__main__":
    data = scrape_sih_portal()
    if data:
        with open('sih2026_scraped.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print("Saved scraped problem statements to sih2026_scraped.json")
