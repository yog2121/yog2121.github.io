import json
import re

with open('extracted_ps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

md_content = "# SIH 2026 Problem Statements: Detailed Analysis & Guide\n\n"
md_content += "This document provides a detailed explanation, including high-level overviews and low-level technical requirements, for the selected SIH problem statements. Use this guide to understand the core challenges and choose the best problem statement for your team.\n\n"
md_content += "---\n\n"

def extract_tech_stack(text):
    text = text.lower()
    techs = []
    if any(kw in text for kw in ['ai', 'machine learning', 'deep learning', 'ml', 'nlp', 'computer vision']): techs.append('AI/ML')
    if any(kw in text for kw in ['blockchain', 'nft', 'smart contract', 'decentralized']): techs.append('Blockchain/Web3')
    if any(kw in text for kw in ['iot', 'sensor', 'hardware', 'drone', 'uav', 'ugv']): techs.append('IoT & Hardware')
    if any(kw in text for kw in ['web', 'app', 'platform', 'portal', 'dashboard']): techs.append('Web/App Development')
    if any(kw in text for kw in ['cloud', 'aws', 'azure', 'serverless']): techs.append('Cloud Infrastructure')
    if any(kw in text for kw in ['data analytics', 'big data', 'visualization']): techs.append('Data Analytics')
    if any(kw in text for kw in ['gis', 'mapping', 'satellite', 'spatial']): techs.append('GIS & Remote Sensing')
    return techs if techs else ['General Software Development']

for idx, item in enumerate(data, 1):
    ps_id = item.get('ID', 'N/A')
    title = item.get('Title', 'No Title')
    desc = item.get('Description', 'No Description')
    theme = item.get('Theme', 'N/A')
    dept = item.get('Department', 'N/A')
    
    # Extract Background, Description, Expected Solution if available
    bg_match = re.search(r'Background:?(.*?)(?=Description:|Problem Statement:|Objective:|Expected Solution:|$)', desc, re.IGNORECASE | re.DOTALL)
    desc_match = re.search(r'Description:?(.*?)(?=Expected Solution:|Objective:|Expected Outcomes:|$)', desc, re.IGNORECASE | re.DOTALL)
    sol_match = re.search(r'Expected Solution:?(.*?)(?=$)', desc, re.IGNORECASE | re.DOTALL)
    
    bg_text = bg_match.group(1).strip() if bg_match else ""
    desc_text = desc_match.group(1).strip() if desc_match else desc
    sol_text = sol_match.group(1).strip() if sol_match else ""
    
    # Fallback if regex fails to split well
    if not bg_text and not sol_text:
        bg_text = "Refer to the main description for context."
    
    tech_stack = extract_tech_stack(desc)
    
    md_content += f"## {idx}. [{ps_id}] {title}\n"
    md_content += f"**Theme:** {theme} | **Department:** {dept}\n\n"
    
    md_content += "### 📖 Original Description\n"
    md_content += f"{desc.strip()}\n\n"
    
    md_content += "### 🤖 AI-Based Analysis\n\n"
    
    # High-Level
    md_content += "#### 🚁 High-Level Overview\n"
    if bg_text and len(bg_text) > 20:
        overview = bg_text[:300] + "..." if len(bg_text) > 300 else bg_text
        md_content += f"{overview}\n\n"
    else:
        overview = desc_text[:300] + "..." if len(desc_text) > 300 else desc_text
        md_content += f"This problem focuses on developing a solution to address challenges in {theme} for the {dept}. The primary goal is to build an efficient system that meets the described requirements.\n\n"
    
    # Low-Level
    md_content += "#### 🛠️ Low-Level Technical Understanding\n"
    md_content += f"- **Core Technology Stack:** {', '.join(tech_stack)}\n"
    
    if 'AI/ML' in tech_stack:
        md_content += "- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.\n"
    if 'Web/App Development' in tech_stack:
        md_content += "- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.\n"
    if 'Blockchain/Web3' in tech_stack:
        md_content += "- **Blockchain Components:** Involves smart contract development, decentralized identity/storage, and ensuring tamper-proof records.\n"
    if 'IoT & Hardware' in tech_stack:
        md_content += "- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.\n"
    if 'GIS & Remote Sensing' in tech_stack:
        md_content += "- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.\n"
    
    if sol_text:
        md_content += "- **Expected Deliverables:** The final solution must include functional prototypes as described: " + (sol_text[:200].replace('\n', ' ') + "...") + "\n"
        
    md_content += "\n---\n\n"

with open('explanation.md', 'w', encoding='utf-8') as out:
    out.write(md_content)

print("Generated explanation.md successfully.")
