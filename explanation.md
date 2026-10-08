# SIH 2026 Problem Statements: Detailed Analysis & Guide

This document provides a detailed explanation, including high-level overviews and low-level technical requirements, for the selected SIH problem statements. Use this guide to understand the core challenges and choose the best problem statement for your team.

---

## 1. [SIH26037] Adaptive Path Planning and Collision Avoidance for Autonomous Vehicles on Unstructured Indian Roads
**Theme:** Robotics and Drones | **Department:** MathWorks

### 📖 Original Description
Background:
Most autonomous driving systems are developed for roads with clear lane markings, standard signage, predictable traffic flow, and controlled intersections. Indian roads are often very different. Vehicles of many types share the same space, including cars, buses, trucks, auto-rickshaws, twowheelers, bicycles, pedestrians, pushcarts, and animals. Drivers and pedestrians may change direction suddenly, merge without signalling, drive against traffic, or cross at unmarked locations. In many areas, road edges are unclear, potholes are common, and formal lane discipline is limited. These conditions make it difficult for traditional path planning methods that depend on structured road geometry and predictable motion. India has a large and diverse road network that includes village roads, crowded market areas, urban intersections, and highways. To support the safe deployment of autonomous vehicles in such environments, students must build planning systems that can adapt in real time to uncertainty, mixed traffic, and changing road conditions.
Description:
Design and simulate an adaptive path planning system for an autonomous vehicle that operates in unstructured Indian road conditions. The system should perceive the environment using a multi-sensor setup such as camera, LiDAR, and radar, and identify diverse road users and obstacles, including auto-rickshaws, pushcarts, pedestrians, and animals. It should predict the short-term motion of surrounding agents, including non-lane-based and irregular movement patterns, and generate a safe, collision-free path that can be replanned in real time. The solution should also handle practical driving situations such as missing lane markings, informal merging, sudden pedestrian movement, and unexpected obstacles on the road. Teams should validate their solution using at least five realistic Indian road scenarios, such as an unmarked village road, a busy urban intersection without signals, a highway merge involving slow-moving vehicles, a dense market area with mixed traffic, and a sudden cattle-crossing event. Teams are encouraged to use MathWorks tools such as RoadRunner for scenario design, Automated Driving Toolbox for sensor modeling and fusion, Navigation Toolbox and Stateflow for planning and decision logic, Vehicle Dynamics Blockset or a Simulink bicycle model for vehicle behavior, and Deep Learning Toolbox for detection and trajectory prediction.
Expected Solution:
The expected solution should include three main parts.First, teams should build a working simulation pipeline that integrates perception, prediction, path planning, decision logic, and vehicle motion in MATLAB and Simulink. Second, teams should create realistic driving scenarios that represent Indian road conditions, including at least two detailed RoadRunner scenes such as a village road and an urban intersection, and use them to test the vehicle across all five required scenarios. Third, teams should present results that show safe and reliable navigation, including collision-free performance, smooth path generation, and timely replanning during changing road conditions. The final submission should include the simulation model, the designed scenarios, performance results with metrics such as replanning latency, path smoothness, and scenario completion rate, a short technical report that explains the approach and design choices, and a demonstration video that shows the vehicle navigating the test scenarios. The solution should demonstrate closed-loop validation of autonomous driving behavior under realistic mixed-traffic conditions.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Most autonomous driving systems are developed for roads with clear lane markings, standard signage, predictable traffic flow, and controlled intersections. Indian roads are often very different. Vehicles of many types share the same space, including cars, buses, trucks, auto-rickshaws, twowheelers, ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Cloud Infrastructure
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The expected solution should include three main parts.First, teams should build a working simulation pipeline that integrates perception, prediction, path planning, decision logic, and vehicle motion ...

---

## 2. [SIH26045] IP-SAKTI Sahayak a multilingual, RAG-based (source-cited) AI assistant for Intellectual Property and regulatory guidance in Ayurveda, across national and international regimes.
**Theme:** Toys & Games | **Department:** All India Institute of Ayurveda

### 📖 Original Description
Background:
Ayurveda rests on a vast corpus of codified and community-held traditional knowledge (TK) and on therapeutics derived from plant, microbial and animal sources. Protecting and commercialising an Ayurvedic product means navigating several overlapping regimes at once: patents, geographical indications (GI), trademarks, copyright, designs, trade secrets and plant-variety rights; the Access-and-Benefit-Sharing duties that flow from Indiaâ€™s sovereignty over its biological resources; and the drug-regulatory framework that decides whether a formulation is a classical medicine, a proprietary medicine, a new drug, a phytopharmaceutical, a food or a cosmetic. Practitioners, researchers, AYUSH startups and MSMEs and cultivators routinely struggle with this. The result is twofold: legitimate Ayurvedic innovation is under-protected and under-commercialised, while Indiaâ€™s traditional knowledge remains exposed to misappropriation abroad. Recent shifts â€” the 2024 patent and biodiversity rules, the WIPO Treaty on Genetic Resources and Associated Traditional Knowledge (2024) and a fast-moving advertising and regulatory landscape â€” make authoritative, plain-language guidance more necessary than ever, yet no such tool exists for the AYUSH community.
Description:
The assistant answers IPR questions specific to Ayurveda with accuracy, source citation and jurisdictional clarity, keeping the national and the international layers distinct through an explicit jurisdiction switch so that answers are never conflated.
Because intellectual property for an Ayurvedic product is inseparable from how the product is regulated, the assistant first helps classify the formulation. It asks the minimum clarifying questions to determine whether the product is a classical/generic medicine (formulation and method drawn from a First-Schedule authoritative text), a patent-or-proprietary medicine, a new or non-classical drug requiring proof of safety and effectiveness, a phytopharmaceutical, an Ayurveda-Aahar / nutraceutical, or a cosmetic â€” and then states what each category requires and its very different IP and ABS posture. For example, a classical formulation is largely traditional knowledge that faces the Section 3(p) patenting bar and is defended through the Traditional Knowledge Digital Library, whereas a new drug gains genuine patent potential but must generate clinical evidence.
National coverage spans the Patents Act (and the 2024 Rules), the GI, Trade Marks, Designs, Copyright and Plant-Variety regimes, the Biological Diversity Act (as amended in 2023, with the 2024 Rules) and the allied drug, advertising, labelling and food/cosmetic regimes â€” the Drugs and Cosmetics Act, the Drugs and Magic Remedies (Objectionable Advertisements) Act and the FSSAI Ayurveda-Aahar regulations. International coverage separately spans TRIPS, the Convention on Biological Diversity and the Nagoya Protocol, the WIPO GRATK Treaty, the PCT, the Madrid and Hague systems, the Budapest Treaty (for micro-organism deposits) and the herbal-product market-access regimes of key export markets.
The assistant also facilitates access to authoritative sources â€” free official databases directly and the userâ€™s own paid subscriptions only with explicit, logged permission â€” so that a user can move from a question to the right registry, record or form. It must cite the specific statute, rule, treaty article or record it relies on; clearly state that it provides information and not legal advice; keep its corpus current as the law changes; and never fabricate authority.
Expected solution:
A deployable, multilingual assistant built on retrieval-augmented generation grounded in a curated, version-tracked corpus of statutes, rules, treaties, pharmacopoeial standards, registry records and case law, so that every answer is traceable to a source and hallucination is minimised. The solution should provide: a jurisdiction toggle (India vs international) with the two answer-sets kept visibly separate; routing across IP types together with the formulation-classification flow; an ABS-compliance helper and a TKDL / prior-art pointer; mandatory source citations with a confidence indicator and a path to escalate to a human IP facilitator; multilingual delivery (leveraging national language infrastructure such as Bhashini); and guardrails, a standing 'information, not legal advice' disclaimer and privacy, audit and security aligned to the Digital Personal Data Protection regime and to recognised AI-application standards. A relational knowledge graph and agentic, multi-source orchestration deepen multi-step reasoning and the build can be staged â€” a citation-grounded retrieval MVP first, then the graph and agentic layers, then paid-source connectors and the full multilingual and voice experience. The output should be evaluable on answer accuracy, citation correctness, safe abstention on out-of-scope or uncertain queries and multilingual quality.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Ayurveda rests on a vast corpus of codified and community-held traditional knowledge (TK) and on therapeutics derived from plant, microbial and animal sources. Protecting and commercialising an Ayurvedic product means navigating several overlapping regimes at once: patents, geographical indications ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A deployable, multilingual assistant built on retrieval-augmented generation grounded in a curated, version-tracked corpus of statutes, rules, treaties, pharmacopoeial standards, registry records and ...

---

## 3. [SIH26053] Adaptive Variable Resolution 2.5D Lidar Mapping for Dynamic Environment Perception
**Theme:** Transportation & Logistics | **Department:** Department of Defence Production /IDEX

### 📖 Original Description
• Background:
Autonomous navigation depends on the ability of a vehicle to perceive its surroundings with high precision. While 3D Lidar point clouds provide rich spatial data, processing millions of points in real-time creates immense computational bottlenecks and memory latency. Conversely, standard 2D occupancy grids lose critical height information necessary for detecting curbs, potholes, or overhanging obstacles. To balance precision and performance, there is a need for a 'foveated' mapping approachâ€”similar to human visionâ€” where the immediate vicinity is rendered in high detail for safety, and distant areas are simplified to reduce the processing load.
• Description:
The goal is to build a deep learning pipeline that transforms raw Lidar point clouds into a variable resolution 2.5D grid (an elevation map with semantic layers). The system must perform three primary tasks:
1. Terrain Analysis: Distinguish between drivable surfaces and non-drivable terrain.
2. Object Detection: Identify and classify static obstacles (walls, poles) and dynamic objects (pedestrians, other vehicles).
3. Adaptive Spatial Representation: Implement a non-uniform grid where the cell size increases as the distance from the sensor increases. This requires a sophisticated data structure that can handle variable resolution without causing alignment errors or data loss during the projection from 3D to 2.5D.
• Expected Solution:
A software framework consisting of:
• A Deep Learning Model: A network (e.g., PointNet++ or a Sparse Convolutional Neural Network) capable of semantic segmentation of point clouds into terrain, static obstacles, and moving objects.
• Variable Resolution Grid Engine: An algorithm that projects classified 3D points into a 2.5D grid where the resolution is high (e.g., 5cm cells)
within a 10m radius and decreases (e.g., 50cm cells) up to a 100m radius.
• Real-time Visualization: A dashboard showing the 2.5D map with distinct color-coding for terrain and objects, demonstrating a significant reduction in memory usage compared to a uniform high-resolution 3D map.
• Performance Metrics: Evidence of low latency (high FPS) and high accuracy in object classification across varying distances.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Autonomous navigation depends on the ability of a vehicle to perceive its surroundings with high precision. While 3D Lidar point clouds provide rich spatial data, processing millions of points in real-time creates immense computational bottlenecks and memory latency. Conversely, standard 2D occupanc...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Cloud Infrastructure, Data Analytics, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A software framework consisting of: • A Deep Learning Model: A network (e.g., PointNet++ or a Sparse Convolutional Neural Network) capable of semantic segmentation of point clouds into terrain, static...

---

## 4. [SIH26057] AI-Powered Automated Underwater Marine Debris and Anomaly Detection System using Side-Scan Sonar Imagery
**Theme:** Renewable / Sustainable Energy | **Department:** National Institute of Ocean Technology (NIOT)

### 📖 Original Description
• Background The accumulation of anthropogenic (man-made) debris in marine ecosystems poses a critical threat to global biodiversity. Among the most destructive types of pollution are â€˜ghost netsâ€™â€”abandoned, lost, or discarded fishing gear. These nets continuously trap and kill marine life,destroy coral reefs, and damage commercial vessel propellers.
Because the ocean is vast and dark, marine conservationists and underwater technologists rely on Side Scan Sonar (SSS) instruments. These sensors are towed behind ships or mounted on Autonomous Underwater Vehicles (AUVs) to create detailed acoustic maps of the seafloor.However, manual inspection of thousands of kilometers of sonar logs is incredibly slow, tedious, and prone to human error. Debris can easily blend into natural geological features like rock formations, sand ripples, and marine ridges. Automating this process via computer vision is essential for efficient ocean cleanup operations.
• Description Participants must develop an end-to-end automated computer vision pipeline capable of ingesting side-scan sonar imagery, identifying man-made debris against a complex natural background, and generating actionable localized data.The software system must be robust enough to handle the core challenges inherent to acoustic imagery: high speckle noise, varying pixel resolutions, acoustic shadows, and data dropouts caused by underwater vehicle motion (heave, pitch, and roll). The primary objective is to build an algorithm that reliably separates natural seafloor topology from artificial anomalies. The final solution should be optimized to run efficiently, potentially allowing deployment on edge devices or onboard a marine drone without requiring heavy cloud computing dependencies.
• Expected Solution Teams are expected to deliver a functional, modular software prototype containing the following core components:
• Object Detection / Semantic Segmentation Model: An AI/ML architecture (such as YOLO,Faster R-CNN, or U-Net) trained to detect and draw bounding boxes or pixel-level masks around man-made objects (including shipwrecks, pipes, cylinders, and entangled debris nets).
• Confidence Scoring & Noise Filtering Module: An algorithmic pipeline or pre-processing filter that minimizes false positives caused by natural acoustic shadows or rock clusters,outputting a clear confidence score (0% to 100%) for every detected anomaly.
• Anomalous Reporting & Geotagging Engine: A data-parsing script or lightweight dashboard interface that reads sonar metadata (such as coordinate files or ping headers) to output a structured report (JSON or CSV format). This report must detail the exact location (latitude/longitude), bounding dimensions, and classification of each detected hazard.
• User Interface (UI) Dashboard: A visual interface where a user can upload a raw sonar image log, view the AI models' detections overlaid on the map in real-time, and download the generated anomaly reports.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
The accumulation of anthropogenic (man-made) debris in marine ecosystems poses a critical threat to global biodiversity. Among the most destructive types of pollution are â€˜ghost netsâ€™â€”abandoned, lost, or discarded fishing gear. These nets continuously trap and kill marine life,destroy coral re...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Cloud Infrastructure, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: Teams are expected to deliver a functional, modular software prototype containing the following core components: • Object Detection / Semantic Segmentation Model: An AI/ML architecture (such as YOLO,F...

---

## 5. [SIH26066] OceanEmbed - Satellite Embedding-Based Deep Learning Framework for Reconstruction of Subsurface Ocean Temperature from Surface Satellite Observations.
**Theme:** Space Technology | **Department:** Indian National Centre for Ocean Information Services (INCOIS) Ocean Valley

### 📖 Original Description
• Background Subsurface ocean temperature is a fundamental variable for understanding ocean circulation,upper-ocean heat content, stratification, climate variability, air-sea interaction and marine ecosystems. Accurate representation of the vertical ocean temperature is essential for applications such as marine heatwave monitoring, fisheries, and data assimilation, etc. However, direct measurements of subsurface temperature remain sparse because they rely primarily on in-situ observing systems such as ARGO profiling floats, moored buoys, gliders, and ship observations. While these observations provide valuable vertical information, their spatial and temporal coverage is insufficient for generating continuous, basin-scale subsurface fields.In contrast, satellite observations provide continuous, large-scale monitoring of surface ocean conditions at relatively high spatial and temporal resolution. Surface variables such as Sea Surface Temperature (SST), Sea Surface Salinity (SSS), Sea Surface Height (SSH)/Sea Level Anomaly(SLA), surface currents, and surface winds contain indirect signatures of subsurface ocean processes through physical mechanisms including thermocline displacement, mesoscale eddies,vertical mixing, transport, and ocean-atmosphere coupling.Recent advances in Artificial Intelligence (AI), Deep Learning (DL), and representation learning enable the generation of satellite embeddings, where multidimensional surface observations are transformed into compact latent representations that capture hidden ocean dynamics. Such embeddings offer the potential to learn nonlinear relationships between surface observations and subsurface ocean structure more effectively than conventional machine learning approaches.
• Detailed Description The current problem statement proposes the development of a Satellite Embedding-Based Deep Learning Framework to reconstruct depth-wise subsurface temperature from daily surface satellite observations at 0.25Â° spatial resolution for North Indian Ocean (5Â°N to 30Â°N and 45Â°E to 105Â°E).The objective is to estimate the three-dimensional ocean temperature using only surface satellite observations.
The proposed system shall:
1. Develop a preprocessing and harmonization pipeline for multi-source satellite and ocean datasets.
2. Standardize all datasets to:
a. Spatial Resolution: 0.25Â° Ã— 0.25Â° b. Temporal Resolution: Daily 3. Use surface observations as input variables:
a. Sea Surface Temperature (SST)
b. Sea Surface Salinity (SSS)
c. Sea Surface Height (SSH) / Sea Level Anomaly (SLA)
d. Surface ocean currents (U, V)
e. Surface Winds (U, V)
4. Generate compact satellite embeddings using DL architectures such as:
a. Convolutional Neural Networks (CNN)
b. Vision Transformers (ViT)
c. Autoencoders d. Graph Neural Networks (GNN)
e. Attention-based hybrid architectures 5. Train reconstruction models that learn the relationship between surface ocean state to temperature profiles.
6. Reconstruct:
a. Temperature at standard depth levels. Standard depths in meters: (0, 5, 10, 20, 30, 50, 75, 100, 125, 150, 200, 300, 500, 700, 1000)
7. Evaluate the reconstruction using independent observations and standard skill metrics like correlation, RMSE, Bias etc.(If a dataset is not available at required resolution, the team may select the openly available product and perform appropriate spatial and temporal interpolation/regridding)
• Training Input Datasets The following datasets are recommended for building the training and evaluation pipeline. (Insert table here)
• Training Target Dataset (Subsurface Temperature)
GLORYS Global Ocean Reanalysis https://doi.org/10.48670/moi-00021 Variables: Temperature In-situ Observations dataset Gridded ARGO INCOIS Live Access Server (LAS) â€“ Gridded ARGO
• Expected Solution
• End-to-end preprocessing pipeline for satellite and ocean datasets.
• Satellite embedding engine capable of learning latent ocean representations from surface observations.
• Deep learning reconstruction model for estimating subsurface temperature.
• Standardized output at daily temporal resolution and 0.25Â° spatial resolution.
• Validation framework using independent ARGO observations.
• Demonstration of a working Proof-of-Concept (PoC) over the Bay of Bengal / Arabian Sea

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Subsurface ocean temperature is a fundamental variable for understanding ocean circulation,upper-ocean heat content, stratification, climate variability, air-sea interaction and marine ecosystems. Accurate representation of the vertical ocean temperature is essential for applications such as marine ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: • End-to-end preprocessing pipeline for satellite and ocean datasets. • Satellite embedding engine capable of learning latent ocean representations from surface observations. • Deep learning reconstru...

---

## 6. [SIH26067] Develop a web-based interactive 3D visualization platform that integrates numerical ocean model outputs and in-situ observations.
**Theme:** Smart Automation | **Department:** Indian National Centre for Ocean Information Services (INCOIS) Ocean Valley

### 📖 Original Description
• Background India's vast Exclusive Economic Zone (EEZ) and coastline demand continuous, high-resolution monitoring of ocean state variables. INCOIS routinely generates and archives large volumes of ocean model outputs - including three-dimensional fields of temperature, salinity, current vectors,chlorophyll, etc. - as well as real-time and delayed-mode observations from autonomous instruments such as Argo profiling floats and underwater Gliders. These datasets are stored in NetCDF and ASCII/text formats and span multiple depth levels, spatial grids, and time steps.Despite the richness of this data, no integrated, web-based 3D visualization platform currently exists that can simultaneously render model fields and in-situ instrument observations in a single interactive environment. Existing tools are either desktop-bound, support only 2D plan views, or lack the ability to co-visualize model outputs alongside instrument profiles. Operational oceanographers and forecasters are therefore forced to toggle between disparate software packages,making it difficult to rapidly correlate model predictions with observational evidence.
Key gaps identified include:
? No web-based, platform-independent 3D rendering of ocean model data (temperature,salinity, currents, etc.) with depth-resolved volumetric views.
? No unified display of Argo float and Glider profile data (latitude, longitude, depth, time,temperature, salinity, chlorophyll) alongside model fields.
? Absence of interactive controls for variable selection, depth-slice navigation, time-step animation, and customizable colorbars.
? Inability to ingest new observational data streams or additional model variables without significant re-engineering.
? Lack of tools to support intuitive, rapid understanding of complex 3D ocean phenomena for operational decision-making.The absence of such a system impedes timely hazard assessment, search-and-rescue support,fishery advisories, climate monitoring, etc. - all operational mandates of INCOIS.
? Expected Solution The proposed solution is a web-based, browser-native 3D Ocean Data Visualization System that integrates ocean model outputs with observational data on a single interactive platform.
Core functional requirements:
? 3D Volumetric Rendering: Interactive visualization of ocean model fields (temperature,salinity, current vectors) across the full water column, with support for depth-slice views,isosurface extraction, and time-step animation using WebGL / Three.js or Cesium.js.
? Instrument Data Overlay: Co-display of Argo float, Glider profile, CTD and BGC data using geospatially accurate markers; users can click a float/glider to inspect a depth-vs-variable profile chart with timestamps.
? Multi-format Data Ingestion: Automated parsers for NetCDF (via PyNIO / xarray backend)and delimited text formats, with a modular architecture that allows new variables or data sources to be added with minimal code change.
? Customizable Colorbar & Variable Controls: Dynamic colorbar editor (color palette, min/max range, log/linear scale), variable selector, layer opacity controls, and vertical exaggeration slider for intuitive depth perception.
? Web-based, Scalable Architecture: Frontend built on modern JavaScript frameworks with a lightweight REST/OPeNDAP API backend, enabling Deployable on INCOIS infrastructure without any client-side dependencies.
? Extensible Design: Plugin-style module for future integration of additional sensors (e.g.,CTDs, moorings, HF-radar, Acoustic doppler current profiler (ADCP), etc.), new ocean model variables, and machine-learning derived products.
The system will follow open standards (OGC WMS/WCS, CF Conventions for NetCDF), enabling interoperability with national and international ocean data portals. The end product will empower INCOIS forecasters to perform rapid, intuitive analysis of complex 3D ocean phenomena -significantly improving the speed and accuracy of operational advisories, in the same way that 3D meteorological visualization has transformed weather forecasting workflows.Public Outreach & Science Communication: Beyond operational use, the platform will serve as a powerful science communication tool. Complex numerical ocean model outputs - which are typically inaccessible to non-specialists - can be transformed into visually intuitive, interactive 3D experiences. This makes the tool valuable for educating school and college students about ocean dynamics, engaging the general public during awareness campaigns, and supporting policymakers in understanding marine environmental conditions. INCOIS can use the platform for outreach events, exhibitions, and e-learning initiatives, bridging the gap between cutting-edge ocean science and the common person.
Insert 2 tables(Acronyms and Dataset Link) here-

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
India's vast Exclusive Economic Zone (EEZ) and coastline demand continuous, high-resolution monitoring of ocean state variables. INCOIS routinely generates and archives large volumes of ocean model outputs - including three-dimensional fields of temperature, salinity, current vectors,chlorophyll, et...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Data Analytics, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The proposed solution is a web-based, browser-native 3D Ocean Data Visualization System that integrates ocean model outputs with observational data on a single interactive platform. Core functional re...

---

## 7. [SIH26068] WeatherGPT: Conversational AI for Weather Forecasting, Alerts, and Climate Information
**Theme:** Disaster Management | **Department:** India Meteorological Department

### 📖 Original Description
• Background Weather information is often distributed through multiple portals, bulletins, satellite products, and forecast systems, making it difficult for common users, researchers, disaster managers, and government agencies to quickly obtain actionable insights.
There is a need for an intelligent conversational platform that can provide real-time weather information, forecasts, warnings, climate analysis, and decision support in natural language.
• Objective Develop an AI-powered chatbot platform named WeatherGPT that integrates meteorological datasets, forecasting models, and disaster warning systems to provide accurate, contextual, and multilingual weather intelligence through conversational interfaces.
• Key Features 1. Real-time weather information retrieval.
2. Natural language querying for weather forecasts.
3. Integration with numerical weather prediction (NWP) models such as GFS/WRF.
4. Extreme weather alerts and early warning dissemination.
5. Location-based forecasting and advisory generation.
6. Multilingual support for Indian languages.
7. Climate trend and historical weather analysis.
8. Voice-enabled interaction for rural accessibility.
• Expected Solution Participants should develop:
• A mobile-based conversational AI platform.
• Backend integration with meteorological databases, website and APIs.
• AI/LLM-based query understanding engine.
• Scalable architecture supporting real-time data ingestion.
• Suggested Technology Stack
• Python / FastAPI / Node.js
• MQTT / WIS2.0 / WebSocket
• LLMs (OpenAI, Llama, Gemini, etc.)
• GIS tools and weather APIs
• PostgreSQL / MongoDB
• Docker / Kubernetes
• Expected Outcomes
• Faster dissemination of weather information.
• Improved public accessibility to forecasts.
• Better disaster preparedness and response.
• Intelligent weather decision-support system for agriculture, aviation, marine, and urban planning.
• Possible Use Cases
• Farmers seeking crop-weather advisories.
• Aviation weather briefing.
• Flood/cyclone warning dissemination.
• Smart city weather monitoring.
• Climate analytics for researchers.
• Evaluation Parameters
• Accuracy and relevance.
• Response latency.
• Multilingual capability.
• User interface and accessibility.
• Scalability and innovation.
• Integration with real-time meteorological systems.
• Voice-enabled interaction for rural accessibility

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Weather information is often distributed through multiple portals, bulletins, satellite products, and forecast systems, making it difficult for common users, researchers, disaster managers, and government agencies to quickly obtain actionable insights.
There is a need for an intelligent conversation...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: Participants should develop: • A mobile-based conversational AI platform. • Backend integration with meteorological databases, website and APIs. • AI/LLM-based query understanding engine. • Scalable a...

---

## 8. [SIH26069] National Weather Big Data Analytics Platform
**Theme:** Disaster Management | **Department:** India Meteorological Department

### 📖 Original Description
Design and develop a scalable National Weather Big Data Analytics Platform capable of collecting and processing real-time weather-related information for India from multiple internet-based sources including social media platforms, public datasets, websites, APIs, and citizen reports. The platform should automatically collect weather related posts and information tagged with #IMD and other relevant weather hashtags, along with metadata such as date & time, city, state, GPS location, photos, videos, and event category, and store the information in a centralized database.
The system should leverage big data technologies and open-source tools to support large-scale real-time data ingestion, processing, storage, and visualization.
Participants are encouraged to use machine learning and AI-based techniques to identify fake or misleading reports, verify untrusted sources, remove duplicate entries, and automatically categorize weather events such as rainfall, thunderstorms, flooding, heatwaves, fog, dust storms, and strong winds.
Develop a web-based dashboard and Admin Panel for monitoring and analysing collected data with features including:
• Date-wise filtering
• Event-wise filtering
• Location-wise filtering
• Verification status tracking
• Real-time visualization and analytics

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Refer to the main description for context.

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, Data Analytics
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.

---

## 9. [SIH26070] To develop an Artificial Intelligence (AI) / Machine Learning (ML) based system for identification, classification, and prediction of different tropical cyclone patterns using multi-source satellite data.
**Theme:** Smart Education | **Department:** India Meteorological Department

### 📖 Original Description
To develop an Artificial Intelligence (AI) / Machine Learning (ML) based system for identification, classification, and prediction of different tropical cyclone patterns using multi-source satellite data.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Refer to the main description for context.

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.

---

## 10. [SIH26093] AI-Based Real-Time Stress and Trauma Assessment Module for Victims/Complainants Accessing NHAA (14566) and Integrated Portal
**Theme:** Smart Automation | **Department:** Department of Social Justice and Empowerment

### 📖 Original Description
• Background Victims and complainants belonging to Scheduled Castes and Scheduled Tribes who approach the National Helpline Against Atrocities (14566), Integrated Portal, chatbot, mobile application, IVRS, or other digital platforms often experience severe emotional distress arising from caste-based discrimination, violence, rape, gang rape, murder of family members, social boycott, displacement, threats, and prolonged legal proceedings. Presently, there is no standardized mechanism for assessing the psychological condition and vulnerability of victims at the time of first contact with authorities.
• Problem Statement Design and develop an AI-enabled Real-Time Stress and Trauma Assessment Module that can assess the psychological stress, trauma, fear, anxiety, and vulnerability levels of victims/complainants interacting through NHAA (14566), the Integrated Portal, chatbot,IVRS, mobile application, or any other approved digital interface.
• Expected Solution The solution should:
• Analyse voice interactions, speech patterns, pauses, pitch variation, emotional indicators, and textual narratives.
• Use Natural Language Processing (NLP), Speech Analytics, and Emotion AI to identify signs of trauma and distress.
• Generate a Stress Vulnerability Index (SVI) on a predefined scale.
• Categorize victims into Low, Moderate, High, and Critical Risk categories.
• Detect indicators of severe trauma, fear, depression, suicidal ideation,intimidation, social isolation, and extreme vulnerability.
• Automatically recommend counselling, legal aid, medical assistance, police intervention, witness protection, or emergency support based on risk level.
• Support multilingual interactions, including major Indian languages and dialects.
• Maintain privacy, informed consent, confidentiality, and ethical AI standards.
• Expected Outcomes
• Early identification of highly distressed victims.
• Prioritization of counselling and rehabilitation services.
• Improved victim-centric grievance redressal.
• Better allocation of support resources.
• Enhanced responsiveness of the helpline and integrated portal ecosystem.
• Stakeholders:
• Department of Social Justice and Empowerment
• National Helpline Against Atrocities (14566)
• State Governments and Union Territories
• District Administrations
• Counsellors and Mental Health Professionals
• Law Enforcement Agencies
• Rehabilitation and Welfare Authorities

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Victims and complainants belonging to Scheduled Castes and Scheduled Tribes who approach the National Helpline Against Atrocities (14566), Integrated Portal, chatbot, mobile application, IVRS, or other digital platforms often experience severe emotional distress arising from caste-based discriminati...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The solution should: • Analyse voice interactions, speech patterns, pauses, pitch variation, emotional indicators, and textual narratives. • Use Natural Language Processing (NLP), Speech Analytics, an...

---

## 11. [SIH26094] AI-Powered Dynamic Mental Health Monitoring and Distress Prediction System for Victims of Atrocities
**Theme:** MedTech / BioTech / HealthTech | **Department:** Department of Social Justice and Empowerment

### 📖 Original Description
• Background Victims of atrocities frequently experience prolonged psychological distress after complaint registration due to threats, intimidation, repeated court appearances, delays in investigation and trial, social ostracism, economic hardship, and rehabilitation challenges.Existing mechanisms focus primarily on legal and financial support and do not provide continuous monitoring of victim well-being.
• Problem Statement Develop an AI-based Dynamic Mental Health Monitoring and Distress Prediction System that continuously monitors and predicts psychological distress among victims and complainants registered through NHAA (14566), the Integrated Portal, chatbot, mobile application, IVRS, or other approved communication channels throughout the investigation,trial, rehabilitation, and compensation process.
• Expected Solution The system should:
• Conduct periodic interactions with victims through chatbot, IVRS calls, SMS, mobile applications, web portal, or helpline follow-up mechanisms.
• Analyse voice, text, behavioural responses, and engagement patterns using NLP, Sentiment Analysis, and Emotion AI.
• Generate a Dynamic Distress Score and longitudinal trend analysis.
• Predict escalation of psychological distress before a crisis situation emerges.
• Trigger alerts to counsellors, district authorities, and designated officials when predefined risk thresholds are crossed.
• Recommend appropriate interventions such as counselling, medical treatment, witness protection, relocation support, financial assistance, legal aid, or rehabilitation measures.
• Provide dashboards at district, State, and national levels for monitoring vulnerable victims and high-risk cases.
• Ensure explainable AI, privacy protection, data security, and compliance with applicable legal and ethical standards.
• Expected Outcomes
• Continuous monitoring of victim well-being.
• Early detection and prevention of mental health crises.
• Timely deployment of counselling and rehabilitation services.
• Strengthened victim confidence in the justice delivery system.
• Evidence-based decision-making for policymakers and administrators.
• Improved coordination among welfare, counselling, and law-enforcement agencies.
• Innovation Components
• Emotion AI
• Voice Stress Analytics
• Sentiment Analysis
• Predictive Risk Modelling
• Multilingual Conversational AI
• Explainable AI
• Automated Case Prioritisation
• Real-Time Risk Alerts
• Priority Use Cases
• Victims of rape and gang rape.
• Victims of murder, grievous hurt, and arson.
• Witnesses facing intimidation or threats.
• Families affected by caste-based violence.
Beneficiaries receiving relief, compensation, rehabilitation, and protection under the provisions of the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Victims of atrocities frequently experience prolonged psychological distress after complaint registration due to threats, intimidation, repeated court appearances, delays in investigation and trial, social ostracism, economic hardship, and rehabilitation challenges.Existing mechanisms focus primaril...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The system should: • Conduct periodic interactions with victims through chatbot, IVRS calls, SMS, mobile applications, web portal, or helpline follow-up mechanisms. • Analyse voice, text, behavioural ...

---

## 12. [SIH26117] Sovereign On-Premise Agentic AI Workbench using Open-Weight Multimodal LLMs for Confidential Industrial Work
**Theme:** Smart Automation | **Department:** Mangalore Refinery and Petrochemicals Limited (MRPL)

### 📖 Original Description
• Background Refineries, PSUs, defence-linked manufacturing units and government offices generate a lot of routine but sensitive knowledge work. Approval notes, board presentations, engineering calculations, code for internal tools, review of scanned drawings and inspection reports. None of this can go through cloud AI assistants like Claude or Codex because the underlying data is confidential: Piping & Instrument Diagrams, financials, vendor negotiations, unreleased designs, internal correspondence, confidential business strategies etc. Company policy keeps this data on premises, so people either do the work manually resulting in productivity gain, or they quietly paste confidential material into public tools anyway. Open weight large reasoning models have reached a point where a genuinely useful assistant built on them is realistic. But nothing deployable exists today that industrial users can actually work with the way they use Claude or Codex.
• Description The idea is a self-hosted, air gapped AI workbench running entirely on the organization's own GPU server. Nothing leaves the premises. The backend should not be locked to one model. It needs to support multiple open weight models at once and automatically pick the right one for a given task based on what that task needs, a coding request handled differently from a document summary request. New open weight models should be addable later without redesigning the system, since this space is moving fast.
The assistant also needs to actually act like an agent. Plan out multi step work, call local tools such as file read and write, code execution in a sandbox, spreadsheet work, internal document search, and iterate on a task instead of answering once and stopping. It needs to handle more than text too: scanned PDFs, handwritten notes, engineering drawings, photographs, read through on device OCR and vision models. Output should be real deliverables, approval notes, PPT/Word/Excel files, working code, calculations with steps shown, not just chat replies. And it needs to ground itself in the organization's own manuals, SOPs and past correspondence through a local knowledge base connector, again with nothing going external.
• Expected Solution A working local deployment, demonstrable on a single workstation or server with a mid range GPU (use a smaller open weight model if 120B class hardware isn't available at the venue), that shows model auto selection across at least two different task types. An agentic task carried through end to end, for example reading a scanned inspection report, pulling out key findings and drafting an approval note as a Word file. A coding task run and verified in a sandbox. A multimodal task involving image or scanned document understanding. The system should also show, through logs or a visible network monitor, that no external calls are made at any point. That's the actual proof of the sovereign claim, not just a statement of it.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Refineries, PSUs, defence-linked manufacturing units and government offices generate a lot of routine but sensitive knowledge work. Approval notes, board presentations, engineering calculations, code for internal tools, review of scanned drawings and inspection reports. None of this can go through c...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Cloud Infrastructure
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A working local deployment, demonstrable on a single workstation or server with a mid range GPU (use a smaller open weight model if 120B class hardware isn't available at the venue), that shows model ...

---

## 13. [SIH26125] Blockchain-Based Secure Platform for Identity,Access Control, and Digital Asset Management
**Theme:** Blockchain & Cybersecurity | **Department:** Bharat Electronics Limited

### 📖 Original Description
• Background Organizations today rely heavily on centralized identity and access management systems, which create significant security and operational risks. These systems are vulnerable to cyber attacks, identity theft, unauthorized access, and single points of failure. Additionally, digital and physical asset ownership is often managed through disconnected or semi-centralized systems, making verification of authenticity, access rights, and ownership history difficult and unreliable. There is a growing need for a decentralized, tamper-proof system that can securely manage user identities, control access permissions, and ensure transparent ownership of digital assets
• Detailed Description The system aims to introduce a blockchain-based framework that integrates decentralized identity management, access control, and NFT-based digital asset ownership. Each user is assigned a decentralized identifier, which serves as a secure and verifiable digital identity independent of centralized authorities and authenticated using cryptographic proofs. Digital assets are represented as Non-Fungible Tokens (NFTs),ensuring each asset is unique, traceable, and permanently recorded on the blockchain.These NFTs are directly allocated to user identities, establishing verifiable ownership that cannot be altered or duplicated.Smart contracts govern all operations within the platform, allowing only authorized administrators to mint NFTs and assign them to user identities, ensuring controlled asset creation and secure distribution. The system also implements Role-Based Access Control (RBAC), where administrators define roles such as Admin, Manager, Auditor,and User and assign specific access rights to each identity. These permissions are enforced automatically by smart contracts during all operations. Every activity, including identity creation, NFT creation, asset allocation, access rights assignment, ownership transfers, and permission updates, is immutably recorded on the blockchain, providing a transparent and tamper-proof audit trail for verifying ownership, authenticity, and access history.
• Expected Solution The expected solution is a decentralized blockchain-based platform that integrates secure digital identity management, NFT-based asset ownership, and access control into a unified and trustless system. It utilizes decentralized identifiers to provide users with self-sovereign, cryptographically verifiable identities that function independently of centralized authorities. Digital assets are issued as Non-Fungible Tokens (NFTs), ensuring uniqueness, traceability, and immutable ownership, with each NFT directly linked to a userâ€™s decentralized identity to establish a permanent and verifiable connection between assets and their owners.The system should be governed by smart contracts that enforce strict rules for NFT creation, allocation, transfer, and validation. Only authorized administrators are allowed to create NFTs and assign them to identities, ensuring secure and controlled asset governance while preventing unauthorized duplication or reassignment. Additionally, the platform should implement Role-Based Access Control (RBAC), where administrators define roles and assign access permissions that determine user privileges within the system. All identity operations, NFT transactions, and access control updates are permanently recorded on the blockchain, ensuring complete transparency, auditability,and tamper-proof verification of ownership, permissions, and transaction history.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Organizations today rely heavily on centralized identity and access management systems, which create significant security and operational risks. These systems are vulnerable to cyber attacks, identity theft, unauthorized access, and single points of failure. Additionally, digital and physical asset ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Blockchain/Web3, Web/App Development
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Blockchain Components:** Involves smart contract development, decentralized identity/storage, and ensuring tamper-proof records.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The expected solution is a decentralized blockchain-based platform that integrates secure digital identity management, NFT-based asset ownership, and access control into a unified and trustless system...

---

## 14. [SIH26126] Vision Based Autonomous Navigation for Unmanned Ground Vehicle for Outdoor environment
**Theme:** Robotics and Drones | **Department:** Bharat Electronics Limited

### 📖 Original Description
• Background Outdoor Unmanned Ground Vehicles (UGVs) face unpredictable terrain, changing light, and unreliable GPS signals. To achieve true autonomy in applications like search-and-rescue,agriculture, or delivery, UGVs must rely on onboard computer vision. Visual perception provides a cost-effective, data-rich way for vehicles to understand and safely navigate complex,unstructured outdoor surroundings.
• Description The objective is to build an autonomous navigation system for a UGV operating in a GPS-denied outdoor environment using camera feeds as the primary sensor. Students must solve three key challenges:
1. Path Detection: Real-time identification of safe, traversable paths vs. hazards (e.g., rocks,ditches, trees).
2. Visual Localization: Estimating the UGVâ€™s position and orientation without GPS using visual data.
3. Collision Avoidance: Dynamically routing the vehicle around sudden obstacles toward a destination.
• Expected Solution A functional software module consisting of:
• Perception AI: A lightweight model for obstacle and path detection.
• Visual SLAM/Odometry: A pipeline to track vehicle movement.
• Path Planner: An algorithm to translate visual data into wheel/motor commands.
• Success Criteria: Successful, collision-free navigation from Point A to Point B across outdoor scenarios

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Outdoor Unmanned Ground Vehicles (UGVs) face unpredictable terrain, changing light, and unreliable GPS signals. To achieve true autonomy in applications like search-and-rescue,agriculture, or delivery, UGVs must rely on onboard computer vision. Visual perception provides a cost-effective, data-rich ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A functional software module consisting of: • Perception AI: A lightweight model for obstacle and path detection. • Visual SLAM/Odometry: A pipeline to track vehicle movement. • Path Planner: An algor...

---

## 15. [SIH26131] Early detection and management of crop diseases and pest infestations
**Theme:** Agriculture, FoodTech & Rural Development | **Department:** Maharashtra State Innovation Society, Department of Skills, Employment, Entrepreneurship and Innovation

### 📖 Original Description
• Problem Description Farmers often recognise crop diseases or pest infestations only after visible damage has spread. Extension staff may cover large areas, while laboratory diagnosis and expert advice may not be immediately available. Weather, crop stage, variety, soil condition and local pest history influence risk, but these inputs are rarely combined into actionable farm-level alerts. Incorrect diagnosis may lead to delayed treatment, excessive or inappropriate pesticide use, increased cultivation cost,residue concerns and yield loss. The challenge is to provide timely, reliable and locally relevant detection,forecasting and management support.
• Expected Solution / Outcome A farmer- and extension-worker-friendly crop-health system that supports image based symptom identification, pest-trap or sensor inputs, weather-based risk forecasting, geospatial hotspot mapping,expert validation and multilingual advisories. The system should recommend integrated pest and disease management actions, safe input usage,referral to extension or laboratories, and follow-up monitoring. It should learn from field confirmations and provide dashboards for agriculture officials.Expected outcomes include earlier detection, reduced crop loss, more targeted pesticide use, faster extension response, improved surveillance coverage and better planning of preventive interventions.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
This problem focuses on developing a solution to address challenges in Agriculture, FoodTech & Rural Development for the Maharashtra State Innovation Society, Department of Skills, Employment, Entrepreneurship and Innovation. The primary goal is to build an efficient system that meets the described requirements.

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: / Outcome A farmer- and extension-worker-friendly crop-health system that supports image based symptom identification, pest-trap or sensor inputs, weather-based risk forecasting, geospatial hotspot ma...

---

## 16. [SIH26132] Strengthening market linkages and price discovery for farmers
**Theme:** Agriculture, FoodTech & Rural Development | **Department:** Maharashtra State Innovation Society, Department of Skills, Employment, Entrepreneurship and Innovation

### 📖 Original Description
• Problem Description Many farmers, especially smallholders and producer groups, have limited visibility of current and expected prices across nearby markets, processors,institutional buyers and digital trading channels. Information on quality specifications, demand, logistics,storage, payment reliability and buyer credentials may be fragmented. Farmers may sell immediately after harvest because of liquidity or storage constraints and may have weak bargaining power. Buyers, meanwhile,may struggle to aggregate consistent volumes and verify quality. The challenge is to improve transparent price discovery and create reliable, efficient linkages from farm gate to suitable buyers.
• Expected Solution / Outcome A market-intelligence and transaction enablement solution that aggregates mandi prices, buyer demand, quality requirements, arrival volumes, transport and storage options; provides localised price trends and sale-window recommendations; matches farmers/FPOs with verified buyers; enables lot creation, quality grading,digital offers, logistics coordination and payment tracking; and supports dispute or grievance processes. Expected outcomes include improved farmer price realisation, reduced information asymmetry, lower transaction cost,stronger FPO aggregation, reduced post harvest loss, more reliable buyer sourcing and transparent transaction records.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
This problem focuses on developing a solution to address challenges in Agriculture, FoodTech & Rural Development for the Maharashtra State Innovation Society, Department of Skills, Employment, Entrepreneurship and Innovation. The primary goal is to build an efficient system that meets the described requirements.

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: / Outcome A market-intelligence and transaction enablement solution that aggregates mandi prices, buyer demand, quality requirements, arrival volumes, transport and storage options; provides localised...

---

## 17. [SIH26137] Quantum-Inspired Intelligent Traffic Route Optimization in Transportation Systems Using Metaheuristic Optimization
**Theme:** Fitness & Sports | **Department:** Egreen Quanta

### 📖 Original Description
Background Modern urban transportation networks face persistent challenges of traffic congestion, inefficient route planning, and high operational costs. Classical optimization techniques struggle with large-scale Vehicle Routing Problems (VRP) because of their NP-hard nature. While quantum computers offer theoretical advantages for combinatorial optimization,current hardware limitations prevent their direct large-scale use. Quantum-inspired metaheuristic algorithms (e.g., Quantum Particle Swarm Optimization - QPSO) embed quantum-mechanical concepts into classical computation, delivering stronger global search, faster convergence, and a better balance between exploration and exploitation.
Problem Description Develop a quantum-inspired metaheuristic optimization framework that dynamically generates near-optimal vehicle routes under real-time or simulated traffic conditions.The transportation network will be modelled as a weighted graph. The framework will focus on algorithms such as Quantum Particle Swarm Optimization (QPSO) and will be benchmarked against conventional metaheuristics and exact methods.
Objectives 1. Design a quantum-inspired metaheuristic framework capable of solving large-scale VRP and shortest-path problems.
2. Minimize total travel time, distance, and traffic congestion.
3. Reduce computational complexity while improving convergence speed and solution quality compared with classical algorithms.
4. Demonstrate scalability for smart-city logistics and intelligent transportation systems.
Expected Solution A complete software platform that implements a Quantum-Inspired Metaheuristic Optimization Algorithm for intelligent traffic routing. The platform must include graph-based network modelling, mathematical formulation of the optimization problem,constraint handling, convergence analysis, and systematic performance benchmarking.
Add 'Delivery Table (Expected Deliverables)' here

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Modern urban transportation networks face persistent challenges of traffic congestion, inefficient route planning, and high operational costs. Classical optimization techniques struggle with large-scale Vehicle Routing Problems (VRP) because of their NP-hard nature. While quantum computers offer the...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A complete software platform that implements a Quantum-Inspired Metaheuristic Optimization Algorithm for intelligent traffic routing. The platform must include graph-based network modelling, mathemati...

---

## 18. [SIH26138] Quantum-Inspired Fuel Consumption Prediction and Green Fleet Optimization
**Theme:** Smart Vehicles | **Department:** Egreen Quanta

### 📖 Original Description
Background The maritime and logistics industries are under increasing pressure to reduce greenhouse gas emissions while maintaining operational efficiency and cost-effectiveness. Fuel consumption constitutes one of the largest operational expenses and environmental impacts of fleet operations. Traditional optimization and prediction methods often struggle with the high-dimensional, non-linear, and multi-objective nature of green fleet management, especially when integrating alternative fuels, varying vessel types, and dynamic operational constraints.
Quantum-inspired metaheuristic algorithms offer a promising approach by combining the global search capabilities of quantum principles with classical computing, enabling more effective solutions for complex, large-scale fleet optimization problems.
Description This problem focuses on developing a quantum-inspired optimization and prediction framework for green fleet management. The framework will predict fuel consumption under varying operational conditions and optimize fleet deployment decisions, including the selection of vessel types, capacities, cruising speeds, and the integration of alternative fuels (LNG, methanol, hydrogen, ammonia) and shore power solutions. The goal is to minimize fuel consumption and lifecycle emissions while satisfying cargo demand, schedule reliability, and operational constraints.
Objectives
• Develop accurate quantum-inspired models for predicting fuel consumption across different vessel types and operating conditions.
• Design a quantum metaheuristic optimization framework to determine the optimal mix of vessel types, capacities, and cruising speeds.
• Minimize total fuel consumption, operational costs, and lifecycle greenhouse gas emissions.
• Ensure operational reliability, cargo demand satisfaction, and compliance with emission regulations.
• Benchmark the proposed quantum-inspired approach against conventional prediction and optimization methods in terms of accuracy, convergence speed, solution quality,and scalability.
Expected Solution A comprehensive software platform that implements quantum-inspired algorithms for fuel consumption prediction and green fleet optimization. The solution should include mathematical modelling, data-driven prediction modules, multi-objective optimization, constraint handling, scenario analysis for alternative fuels, and performance evaluation through benchmarking and case studies.
Add 'Delivery Table (Expected Deliverables)' here

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
The maritime and logistics industries are under increasing pressure to reduce greenhouse gas emissions while maintaining operational efficiency and cost-effectiveness. Fuel consumption constitutes one of the largest operational expenses and environmental impacts of fleet operations. Traditional opti...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A comprehensive software platform that implements quantum-inspired algorithms for fuel consumption prediction and green fleet optimization. The solution should include mathematical modelling, data-dri...

---

## 19. [SIH26140] AI-Based Interactive Quantum Algorithm Learning Platform
**Theme:** Smart Education | **Department:** Egreen Quanta

### 📖 Original Description
Background Quantum computing is a transformative technology with significant impact across scientific and industrial domains. However, education in this field remains challenging due to the abstract nature of core concepts such as qubits, superposition, entanglement, and quantum algorithms.
Existing learning resources are often static, heavily theoretical, and lack hands-on interaction.
Limited access to real quantum hardware further restricts practical learning. There is a strong need for an integrated, interactive, and intelligent platform that combines theoretical instruction, visual circuit design, real-time simulation, and personalized AI-based guidance to accelerate quantum education and workforce development.
Description The goal is to develop an AI-powered interactive web-based platform that enables students, researchers, and professionals to learn, design, simulate, and visualize quantum algorithms.
The platform will offer structured learning modules covering quantum computing fundamentals, circuit design, and standard quantum algorithms. Users will be able to construct quantum circuits through a drag-and-drop interface or by writing code, execute them on multiple quantum simulators, and visualize quantum states and measurement outcomes. AI-assisted features will provide real-time explanations, error detection, optimization suggestions,and personalized learning paths. The system will support major quantum software development kits and promote collaborative and modular learning.
Objectives
• Design and develop an interactive web-based platform for learning quantum computing and quantum algorithms.
• Provide graphical (drag-and-drop) and code-based quantum circuit design tools.
• Enable real-time execution and simulation of quantum circuits using multiple backends(Qiskit Aer, PennyLane, Cirq, qBraid, etc.).
• Integrate AI-assisted tutoring for concept explanation, code generation, debugging, and personalized learning recommendations.
• Support visualization of quantum states, Bloch spheres, measurement probabilities, and circuit execution results. Include assessment modules, coding challenges, progress tracking, and instructor dashboards.
Expected Solution A comprehensive AI-based interactive quantum learning platform that seamlessly integrates education, programming, simulation, visualization, and intelligent tutoring. The solution will offer structured theoretical content, visual circuit builders, integrated code editors, multi-framework simulation support, AI-powered assistance, assessment tools, and progress analytics. The platform will be designed to be scalable and accessible, contributing to the development of a quantum-ready workforce.
Add 'Delivery Table (Expected Deliverables)' here

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Quantum computing is a transformative technology with significant impact across scientific and industrial domains. However, education in this field remains challenging due to the abstract nature of core concepts such as qubits, superposition, entanglement, and quantum algorithms.
Existing learning r...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Data Analytics
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A comprehensive AI-based interactive quantum learning platform that seamlessly integrates education, programming, simulation, visualization, and intelligent tutoring. The solution will offer structure...

---

## 20. [SIH26142] Deep Learning Based Super Resolution Mapping (SRM) from Medium Resolution Satellite Imageries
**Theme:** Smart Education | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background Medium-resolution satellite imagery, typically ranging from 10 to 30 meters, is widely used in change detection, agriculture, land-cover mapping, disaster monitoring, and urban planning because it offers broad coverage and frequent revisit time. However, the spatial detail is often insufficient for fine-scale analysis, such as identifying small buildings, narrow roads, field boundaries, or localized damage assessment. This creates a need for advanced deep learning based generative enhancement techniques that can extract greater value from existing Earth observation data.
• Description Medium-resolution satellite imagery, usually ranging from 10 to 30 meters, is widely used in remote sensing for agriculture monitoring, land-cover mapping, urban planning, disaster assessment, and environmental observation because it provides large-area coverage and frequent revisit capability. However, its spatial resolution is often not sufficient to clearly identify fine details such as narrow roads, small buildings, field boundaries, water edges, or localized damage. This limitation reduces the accuracy and confidence of interpretation and decision-making in applications that require detailed ground-level information. Generative AI super-resolution addresses this problem by using advanced models such as GANs, diffusion models, and deep neural networks to enhance medium-resolution satellite images into sharper and more information-rich finer outputs. These models learn spatial textures, patterns, edges, and spectral relationships from training data containing both medium-resolution and high-resolution image pairs. The goal is not simply to make the image visually clearer, but to reconstruct useful fine-scale details while preserving the original geographic and spectral consistency of the satellite data.
The expected solution is a robust AI-based super-resolution framework that can take medium-resolution satellite imagery as input, perform pre-processing, apply a trained generative model, and produce an enhanced spatial resolution image, suitable for analysis. The system should improve feature visibility, support better classification, change detection, crop monitoring, urban mapping, and disaster response. At the same time, it must clearly manage uncertainty because some reconstructed details are inferred by the model and not directly observed. Therefore, validation against high-resolution reference data is essential to ensure that the enhanced outputs are scientifically reliable and useful for real-world remote sensing applications.
• Expected Solution The expected solution is a robust super-resolution framework model based on the choice of participating team (Transformers/Generative/CNN etc.) that can transform the input medium-resolution satellite imagery (10m Sentinel-2 Satellite Imagery) into sharper, information-rich products (<4m) while preserving geospatial and spectral consistency. The solution should include pre-processing, model training with paired datasets, accuracy assessment, and validation against high-resolution references. Ideally, it should support applications such as crop monitoring, urban analysis, and disaster assessment. The final outcome should improve in-terms of interpretability and analytical utility, while clearly accounting for uncertainty and error components.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Medium-resolution satellite imagery, typically ranging from 10 to 30 meters, is widely used in change detection, agriculture, land-cover mapping, disaster monitoring, and urban planning because it offers broad coverage and frequent revisit time. However, the spatial detail is often insufficient for ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: is a robust AI-based super-resolution framework that can take medium-resolution satellite imagery as input, perform pre-processing, apply a trained generative model, and produce an enhanced spatial re...

---

## 21. [SIH26146] AI-Powered Monitoring & Analysis of Bitcoin Transaction Traffic
**Theme:** Transportation & Logistics | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background Bitcoin's pseudonymous, peer-to-peer design lets criminal actors move, layer, and cash out illicit funds â€” ransomware payments, darknet-market proceeds, extortion, and laundering â€” while evading traditional financial surveillance.
The objective of problem statement is to design and build a complete system (offline) that ingests bulk Bitcoin transaction/network metadata (in CSV/JSON/XML), correlates network-layer (IP/port/timing) observations with blockchain-layer (wallet/TXID/amount) data, and applies AI/ML to detect anomalies, cluster entities, and generate prioritized, explainable investigative leads.
• Description i.Challenge Objectives- • Ingest & parse a bulk metadata dataset (timestamp, src/dst IP & port, TXID, input/output wallet addresses, amounts, fee, script type).
• Build an entity/transaction graph linking IPs, wallets, and transactions.
• Implement AI/ML detection use case (see Section 4) with a working model â€” not just rules.
• Generate a ranked, explainable alert list (why a wallet/transaction was flagged, with a confidence score).
• Present findings via a simple dashboard or link-analysis visualization.
ii.Suggested AI/ML Focus Areas Attach Table Here of AI/ML Focus Areas iii.Dataset: Parameters & Synthetic Generation Participants will work with a synthetic dataset modelled on real Bitcoin P2P/transaction fields (no real seized or live-intercept data will be provided). Minimum fields: timestamp, src_ip, dst_ip, src_port, dst_port, txid, input_addresses[], output_addresses[], input_amounts[], output_amounts[], geo_country/asn (integrate open source downloadable Geo IP database).
• Expected Solution • Workable complete offline solution for linux platform.
• Working prototype (code repo) with ingestion, correlation, and AI/ML model.
• Short technical write-up: approach, model choice, and explain ability method.
• Dashboard/visualization showing flagged entities and evidence for each flag.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Bitcoin's pseudonymous, peer-to-peer design lets criminal actors move, layer, and cash out illicit funds â€” ransomware payments, darknet-market proceeds, extortion, and laundering â€” while evading traditional financial surveillance.
The objective of problem statement is to design and build a compl...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Blockchain/Web3, Web/App Development, Data Analytics
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Blockchain Components:** Involves smart contract development, decentralized identity/storage, and ensuring tamper-proof records.
- **Expected Deliverables:** The final solution must include functional prototypes as described: • Workable complete offline solution for linux platform. • Working prototype (code repo) with ingestion, correlation, and AI/ML model. • Short technical write-up: approach, model choice, and explain a...

---

## 22. [SIH26148] Creation of scripts/functions with new programming language to commence Computer & Network forensic analysis without triggering security solutions
**Theme:** Blockchain & Cybersecurity | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background Modern antivirus solutions restrict proprietary software from executing or creating custom scripts designed to analyze the system for deep forensic system analysis. They rely heavily on behavioral heuristics, static signature matching, common compiler outputs (like standard MSVC or GCC artifacts), typical API call sequences and kernel-level monitoring to intercept activities. However, a significant paradigm shift may occur when programmers adopt sophisticated software engineering practicesâ€”specifically continuous integration and continuous deployment (CI/CD).
• Description Creating 'Next-Gen' programming language framework, named as 'JOCKY' using cross-platform compiler (windows & ubuntu) which enables systematic creation of scripts for analyzing malicious activities and also provide the complete digital forensics of the computer or network. By utilizing this specific new developed programming language, the framework will not be hindered by any of the existing anti-virus in the environment. This framework should include various scripts/functions which combined with automated polymorphic engines, custom encryption, and multi-vector in-memory execution via native components or Bring your own vulnerable driver (BYOVD) techniques. Framework also able to handle multiple system analysis simultaneously using central management interface. The traffic b/w management interface and client should be routed through trusted cloud infrastructure or content delivery networks (CDNs) using domain fronting or legitimate cloud APIs.
• Expected Solution The scope of the problem is to create scripts/functions in the proprietary programming language (named JOCKY) which enables the user to detect the adversaries:
1. Independent programming Language - Programming language or custom Language-independent intermediate representation (LLVM) frontend alters basic control-flow graphs, token generation, and binary structures, rendering signature-based detection ineffective.
2. Polymorphism in scripts/function generated - Rather than manually packing a binary, the scripts/function in framework uses a continuous delivery pipeline. Every iteration automatically passes through integrated obfuscators, variable-encryption routines, and polymorphic engines. This ensures that every deployment instance possesses unique hashes, modified entry points, and altered import tables, neutralizing traditional file-reputation databases.
3. Living-off-the-Land & BYOVD Execution - The scripts/functions in framework should avoid standard, noisy API calls for core operations like persistence, privilege escalation, and network routing (SOCKS5). Instead, it relies on:
A. In-Memory Execution: Utilizing multiple distinct file-less techniques (e.g., process hollowing, reflective DLL injection, API unhooking, direct system calls, or thread execution hijacking) to run secondary script entirely within the memory space of trusted processes.
B. Kernel-Level Subversion: Detection of legitimate or vulnerable third-party drivers (BYOVD) to disable EDR callbacks or manipulate kernel structures directly, blinding security agents running in user or kernel space.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Modern antivirus solutions restrict proprietary software from executing or creating custom scripts designed to analyze the system for deep forensic system analysis. They rely heavily on behavioral heuristics, static signature matching, common compiler outputs (like standard MSVC or GCC artifacts), t...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, Cloud Infrastructure
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The scope of the problem is to create scripts/functions in the proprietary programming language (named JOCKY) which enables the user to detect the adversaries: 1. Independent programming Language - Pr...

---

## 23. [SIH26149] Design and Development of an Integrated Secure Data Erasure and Advanced File Recovery Tool for Digital Forensics and Data Sanitization
**Theme:** Blockchain & Cybersecurity | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background With the rapid growth of digital storage technologies, organizations, government agencies, law enforcement units, enterprises, and individual users face two major challenges: securely destroying sensitive data to prevent unauthorized recovery and recovering deleted digital evidence during forensic investigations. Existing solutions generally focus on either secure data deletion or file recovery and often support limited storage technologies and file systems. This forces investigators and cybersecurity professionals to use multiple tools, increasing complexity, cost, and operational inefficiencies. Therefore, there is a need for a unified platform that integrates secure data sanitization with advanced forensic-grade file recovery and carving capabilities.
• Description The proposed solution aims to develop an integrated software platform consisting of three core modules: (1) Secure Drive Eraser, (2) Secure File & (3) Folder Eraser, and Advanced File Carving and Recovery. The Secure Drive Eraser Module should securely sanitize HDDs, SSDs, USB drives, memory cards, and external storage devices while providing verification mechanisms, audit logging, tamper-resistant reporting, and compliance with industry and government data destruction standards. The Secure File and Folder Eraser Module should enable selective secure deletion of files and folders, remove associated metadata and residual traces, support batch operations, verify erasure success, and provide audit reporting across multiple file systems and operating systems. The Advanced File Carving and Recovery Module should recover deleted files from formatted, damaged, or corrupted media using signature-based, structure-based, and intelligent carving techniques. It should support recovery without file system metadata, fragmented file reconstruction, automatic classification of recovered files, confidence scoring, and comprehensive forensic reporting while preserving evidential integrity.
• Expected Solution The expected outcome is an integrated software platform that combines secure data sanitization and forensic recovery capabilities within a single environment. The solution should provide (1) secure drive erasure with verification and reporting, (2) secure file and folder deletion with metadata cleansing, (3) advanced file carving and recovery from formatted media, support for multiple storage devices and file systems, automated classification and validation of recovered files, comprehensive audit logs and forensic reports, a user-friendly graphical interface, and compliance with forensic and data sanitization standards. Expected deliverables include an integrated software tool, (1) Secure Drive Eraser Module, (2) Secure File and Folder Eraser Module, (3) Advanced File Carving and Recovery Module, Reporting and Audit Management System, User Interface Dashboard, validation and testing documentation, user manuals, technical documentation, and performance evaluation reports. The solution should improve secure data disposal practices, reduce the risk of unauthorized data recovery, enhance forensic investigation capabilities, increase recovery rates from damaged storage media, reduce investigation time, improve compliance and auditability, and provide a unified platform for secure sanitization and forensic recovery operations.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
With the rapid growth of digital storage technologies, organizations, government agencies, law enforcement units, enterprises, and individual users face two major challenges: securely destroying sensitive data to prevent unauthorized recovery and recovering deleted digital evidence during forensic i...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The expected outcome is an integrated software platform that combines secure data sanitization and forensic recovery capabilities within a single environment. The solution should provide (1) secure dr...

---

## 24. [SIH26151] Dark web threat actor de-anonymization
**Theme:** Blockchain & Cybersecurity | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background The dark web has become a preferred operating space for threat actors in the modern age, mainly because it lets them hide their identity behind Tor hidden services, which makes attribution of threat actors operating on darkweb the main challenge for any investigation. Such threat actors carry out a wide range of unlawful activities such as drugs and arms sale, stolen data and hacking services, money laundering, terror financing, etc. The objective of this problem statement is to build a system for the deanonymization of dark web threat actors and link them to suspect real-world entities.
• Description The system shall deanonymize dark web threat actors by continuously gathering their footprints from a range of sources (marketplaces, forums, deep web etc.) and linking them to the identifying information available on those sources. The system envisages three core capabilities. First, finding misconfigurations in Tor hidden servicesâ€”such as exposed server-status pages, SSL certificates tied to clearnet domains, default service banners, descriptor inconsistencies, etc and matching them with clearnet infrastructure to point to the likely origin servers. Second, mapping threat actors across multiple marketplaces into a single relationship graph of handles, PGP keys, wallets and trust links. Third, using AI-based analysis, including stylometric persona identification and behavioural profiling, to link rebranded or migrated personas to known threat actors. The system shall provide an analytical front end to query the database across a chosen timeline and shall work in an autonomous mode, drawing on available sources of good quality and reliability.
• Expected Solution An end-to-end system shall be developed for the collection, storage, contextualization and querying (through GUI/dashboards) of dark web threat actor intelligenceâ€”covering actor profiles, identifiers (handles, PGP keys, wallets etc.), hidden service infrastructure indicators, persona linkages, attribution confidence, category, last scan date and source. The system shall also provide the facility to export the result set in CSV, JSON and report formats.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
The dark web has become a preferred operating space for threat actors in the modern age, mainly because it lets them hide their identity behind Tor hidden services, which makes attribution of threat actors operating on darkweb the main challenge for any investigation. Such threat actors carry out a ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: An end-to-end system shall be developed for the collection, storage, contextualization and querying (through GUI/dashboards) of dark web threat actor intelligenceâ€”covering actor profiles, identifier...

---

## 25. [SIH26154] Gen AI Platform for Automated Content Transformation
**Theme:** Smart Automation | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background Organisations frequently need to convert information available in different forms such as news articles, reports, advisories, threat intelligence, policy documents, research papers, announcements, incident reports or free-form prompts into specific communication artefacts suitable for various purposes. The process of manually analysing the source content, understanding the desired objective and creating the required output format is time-consuming, resource-intensive and often requires expertise in content creation, communication and domain knowledge.
There is a need for an intelligent platform that can transform user-provided content into a desired output format through a simple and configurable interface.
• Description The system shall act as an AI-powered content transformation engine that converts a common source of information into the specific deliverable requested by the operator, thereby reducing manual effort, improving consistency, accelerating content creation and enhancing operational efficiency.
The platform shall provide a dashboard through which an operator can submit source content in the form of high quality English language text, documents, articles, reports, prompts, images, videos or contextual information. In addition to providing the source content, the operator shall select one or more desired output types through configurable parameters available on the dashboard.
Based on the submitted content and the selected output type(s), the platform shall analyze the input, understand the context and intent, and generate the requested output artefact. The platform should support multiple output formats and allow operators to control generation parameters such as target audience, tone, language, level of detail, communication objective and content style.
In summary, platform shall generate output corresponding to the option(s) selected by the operator on the dashboard.
• Examples include
• If 'Video' is selected, generate a complete video package including script, storyboard, scene descriptions, narration text, subtitles and visual recommendations.
• If 'LinkedIn Post' is selected, generate a professional LinkedIn post suitable for publication.
• If 'Twitter/X Post' is selected, generate platform-optimized tweets or tweet threads.
• If 'Advisory' is selected, generate a structured advisory document.
• If 'Infographic' is selected, generate infographic content, layout recommendations and key messaging.
• If 'Executive Summary' is selected, generate a concise executive briefing.
• If 'Presentation' is selected, generate presentation slides and speaker notes.
• If multiple output formats are selected, generate all selected deliverables from the same source content.
• Expected Solution/Deliverables for Evaluation
• Source Code Link (GitHub/Drive Link)
• Readme with Setup Instructions
• Architecture Document (Max 2 Pages)
• Demo Video (Max 2 Minutes)
• Technical Presentation (Max 5 Slides)

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Organisations frequently need to convert information available in different forms such as news articles, reports, advisories, threat intelligence, policy documents, research papers, announcements, incident reports or free-form prompts into specific communication artefacts suitable for various purpos...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Expected Deliverables:** The final solution must include functional prototypes as described: /Deliverables for Evaluation • Source Code Link (GitHub/Drive Link) • Readme with Setup Instructions • Architecture Document (Max 2 Pages) • Demo Video (Max 2 Minutes) • Technical Presentation (Max 5 ...

---

## 26. [SIH26156] Universal Log Pre-processing Framework
**Theme:** Miscellaneous | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background Modern enterprises generate massive volumes of logs from a wide range of sources, including network devices, servers, operating systems, applications, databases, cloud services, containers, endpoint security tools, identity and access management systems, IoT devices, and other hardware and software platforms. These logs are produced in diverse formats such as Syslog, JSON, XML, CSV, CEF, LEEF, proprietary vendor formats, and application-specific schemas.
The diversity of log structures creates significant challenges in centralized monitoring, security operations, compliance reporting, incident investigation, and threat analytics. Security teams often spend substantial effort developing source-specific parsers and normalization rules before the data can be effectively utilized by SIEM, data lake, or machine learning platforms.
As organizations adopt hybrid, multi-cloud, and AI-driven environments, the need for a universal and extensible log standard that can accommodate both current and future data sources have become increasingly critical.
• Detailed Description Design and develop a Universal Log Pre-processing Framework (ULPF) capable of ingesting, parsing, normalizing, and standardizing logs and events generated by any hardware or software system.
The framework should support diverse event sources while preserving the original event data for forensic and compliance purposes. It should transform heterogeneous logs into a unified schema that enables consistent analytics, correlation, visualization, threat hunting, anomaly detection, and machine learning applications.
The framework must be scalable, extensible, vendor-agnostic, and suitable for deployment in Big Data environments handling billions of events per day.
• Expected Solutions This solution should cover universal event schema and processing framework that enables:
a) Preserve complete raw event data without information loss.
b) Extract and parse source-specific attributes.
c) Normalize fields into a common event taxonomy.
d) Maintain traceability between normalized and original events.
e) Plug-and-play on boarding of new log sources.
f) Unified visibility across enterprise environments.
g) Efficient SIEM and Data Lake integration.
h) AI/ML-ready security and operational analytics.
i) Reduced parser development effort.
j) The solution shall be deployable in an air-gapped network.
k) Solution may be packaged in a container for making it platform independent.
• Current Scope Build a framework that converts any perimeter network device-generated log or eventâ€”regardless of source, format, vendor, or technology into a standardized, lossless, analytics-ready representation for next-generation SIEM and cybersecurity platforms.
• Expected Solution/Deliverables for Evaluation
• Source Code Link (GitHub/Drive Link)
• Readme with Setup Instructions
• Architecture Document (Max 2 Pages)
• Demo Video (Max 2 Minutes)
• Technical Presentation (Max 5 Slides)

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Modern enterprises generate massive volumes of logs from a wide range of sources, including network devices, servers, operating systems, applications, databases, cloud services, containers, endpoint security tools, identity and access management systems, IoT devices, and other hardware and software ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Cloud Infrastructure, Data Analytics
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Expected Deliverables:** The final solution must include functional prototypes as described: s This solution should cover universal event schema and processing framework that enables: a) Preserve complete raw event data without information loss. b) Extract and parse source-specific attributes...

---

## 27. [SIH26158] Single-Pass Drone Video to Accurate 3D Model Generation System
**Theme:** Robotics and Drones | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background:
Generation of accurate 3D models of buildings, infrastructure, terrain, and objects typically requires multiple drone passes, extensive image overlap, specialized flight planning, and significant post-processing time. In operational scenarios such as disaster response, surveillance, infrastructure inspection, military reconnaissance, and rapid mapping, there is often only a single opportunity to capture data over the target area. A solution capable of generating an accurate and textured 3D model from a single drone pass video would significantly reduce mission time, operator effort, data acquisition requirements, and processing complexity while enabling near real-time situational awareness.
• Description:
Design and develop an AI-enabled system capable of generating a georeferenced and metrically accurate 3D model of a scene using only a single-pass drone video stream captured from a moving UAV. The system should process video frames captured during one flight path and reconstruct:
(i) 3D terrain and structures (ii) Building facades and rooftops (iii) Roads and infrastructure (iv) Vegetation and obstacles (v) Textured 3D meshes or point clouds
• Expected Solution/Deliverables:
The generated model should be suitable for visualization, measurement, and analysis purposes.
• Key Challenges (i) Limited viewing angles due to single flight path.
(ii) Motion blur and video compression artifacts.
(iii) Variable illumination and shadows.
(iv) Dynamic objects (vehicles,humans, animals).
(v) GPS inaccuracies and sensor noise.
(vi) Real-time or near-real-time processing requirements.
(vii) Reconstruction of occluded surfaces.
(viii) Maintaining metric accuracy without extensive Ground Control Points (GCPs).
• Input Data :
• Mandatory (i) Drone video (1080p/4K)
(ii) GPS coordinates (iii) Flight metadata
• Optional (i) IMU data (ii) Barometric altitude (iii) Camera intrinsic parameters (iv) RTK/PPK corrections Add 'Desired Output' and 'Evaluation Criteria' table here
• Potential Applications :
(i) Border and strategic area mapping (ii) Disaster damage assessment (iii) Urban planning and smart cities (iv) Infrastructure inspection (v) Construction progress monitoring (vi) Archaeological documentation (vii) Digital twin generation (viii) Military reconnaissance and mission planning

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Generation of accurate 3D models of buildings, infrastructure, terrain, and objects typically requires multiple drone passes, extensive image overlap, specialized flight planning, and significant post-processing time. In operational scenarios such as disaster response, surveillance, infrastructure i...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Cloud Infrastructure, Data Analytics, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: /Deliverables: The generated model should be suitable for visualization, measurement, and analysis purposes. • Key Challenges (i) Limited viewing angles due to single flight path. (ii) Motion blur and...

---

## 28. [SIH26160] AI-Powered IPsec VPN Protocol Analyzer and Security Assessment Framework
**Theme:** Blockchain & Cybersecurity | **Department:** National Technical Research Organisation (NTRO)

### 📖 Original Description
• Background Virtual Private Networks (VPNs) are fundamental to secure communication over untrusted networks. Among the available VPN technologies, IPsec is widely adopted across enterprise, government, military, and cloud infrastructures because of its ability to provide confidentiality, integrity and authentication.
However, the security of an IPsec deployment depends on multiple factors, including the chosen cryptographic algorithms, authentication mechanisms, key exchange protocols, and operational mode (Tunnel or Transport). Misconfigurations, outdated cipher suites, improper key management, or protocol implementation flaws can significantly weaken the overall security posture.
Traditional protocol analysis tools provide packet-level visibility but often require expert interpretation. There is a growing need for intelligent systems capable of automatically analyzing IPsec deployments, identifying protocol characteristics, assessing security risks, and generating actionable recommendations.
• Description: Design and develop an AI-driven protocol analysis platform capable of automatically analysing IPsec VPN deployments established under different security configurations. The platform should inspect captured traffic or live network streams, identify protocol characteristics, infer VPN operating modes, evaluate cryptographic configurations and generate an automated security assessment report.
The solution should assist analysts in understanding the security posture of IPsec deployments without requiring manual packet inspection. Participants are expected to develop an intelligent framework capable of performing the following tasks.
a) VPN Testbed Generation: Develop a laboratory environment capable of establishing IPsec VPNs using multiple configurations. The framework should support variations such as:
• Tunnel Mode
• Transport Mode
• AES-128
• AES-256
• AES-GCM
• AES-CBC + HMAC
• Different DH Groups
• Perfect Forward Secrecy enabled/disabled
• IPv4 and IPv6 communication
• Different types of traffic â€“ VoIP, Whatsapp, E-mail, Web-browsing, ICMP, Video streaming etc.
b) Traffic Capture: Acquire network traces using tools such as Wireshark, TCP-dump, Custom packet capture utilities. Captured dataset should include
• IKE negotiation
• ESP packets
• AH packets (optional)
• Normal communication c) AI-Based Protocol Identification: Develop an AI engine capable of automatically identifying
• IPsec protocol
• IKE version
• Tunnel Mode
• Transport Mode
• Encryption algorithm
• Authentication algorithm
• Key exchange method
• Security Association characteristics
• Predict Type of traffic inside ESP-IPsec d) Security Assessment: The framework should automatically evaluate
• Cryptographic strength
• Configuration compliance
• Security Association parameters
• Key lifetime
• Replay protection
• Forward Secrecy configuration
• Cipher suite strength
• Metadata exposure e) The output should include a comprehensive security score, traffic analysis and metadata inference. Automatically generate
• Executive Report & Technical Report
• Risk Score
• Threat Matrix
• AI Confidence Score
• Expected Solution/Deliverables:
• Working software prototype
• AI classification engine
• Interactive dashboard
• Security assessment report
• Demonstration video
• Technical documentation
• Dataset used for training/testing

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Virtual Private Networks (VPNs) are fundamental to secure communication over untrusted networks. Among the available VPN technologies, IPsec is widely adopted across enterprise, government, military, and cloud infrastructures because of its ability to provide confidentiality, integrity and authentic...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, Cloud Infrastructure
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Expected Deliverables:** The final solution must include functional prototypes as described: /Deliverables: • Working software prototype • AI classification engine • Interactive dashboard • Security assessment report • Demonstration video • Technical documentation • Dataset used for training/...

---

## 29. [SIH26167] SatQuery AI - An Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis through Text Queries
**Theme:** Space Technology | **Department:** Department of Space / Indian Space Research Organisation

### 📖 Original Description
Background Remote-sensing imagery is widely used for agricultural monitoring, disaster management, urban planning, forest monitoring, water-resource assessment, infrastructure mapping, and environmental analysis. However, most existing remote-sensing AI solutions are developed as isolated applications for a single predefined task, such as land-cover classification, object detection, visual question answering, or change detection. These systems often require users to understand satellite-data characteristics, GIS workflows, model selection, and task-specific parameters. Consequently, non-expert users may find it difficult to obtain meaningful information from satellite imagery through simple natural-language queries.
Many operational remote-sensing questions cannot always be answered reliably using a single optical image. Relevant information may be distributed across paired or multiple observations acquired at different times or by different sensors. Optical and multispectral imagery provides spectral and contextual information, whereas synthetic aperture radar (SAR) provides complementary structural information and supports day-and-night acquisition through cloud cover. Multitemporal image pairs are required to identify and interpret changes over time, while co-registered opticalâ€“SAR pairs can provide more complete and reliable information than either modality alone.
A general-purpose large language model (LLM) or vision-language model (VLM) cannot be expected to perform these specialised tasks reliably without adaptation to remote-sensing imagery, sensor characteristics, and domain-specific terminology. The proposed solution must therefore include remote-sensing fine-tuning or domain adaptation and may employ multiple specialised models for different tasks. BigEarthNet.txt will serve as the primary dataset for adapting imageâ€“text representations to multisensor remote-sensing data. VRSBench and RSVQA will be used to evaluate single-image captioning, grounding, and visual question answering, while CDVQA will be used to evaluate multitemporal change-based visual question answering.
The novelty of SatQuery AI lies in its agentic, query-driven framework. Instead of applying a single generic VLM, the system selects and executes suitable remote-sensing specialist models, validates inputs, combines their outputs, and returns an evidence-grounded response.
Description The objective is to develop SatQuery AI, a software-based agentic vision-language assistant for analysing single and paired remote-sensing images through natural-language queries. Single-image understanding is a mandatory baseline, while the principal focus is joint reasoning over paired cross-modal and multitemporal imagery.
Defined Input Scope
• Single image: One optical/multispectral or SAR image for captioning, visual question answering, and text-guided region grounding.
• Cross-modal pair: Co-registered optical/multispectral and SAR images of the same geographic area for joint information extraction and cross-modal analysis.
• Bi-temporal pair: Two spatially corresponding images of the same geographic area acquired at different times for change detection, change description, and change-based visual question answering.
• Supported formats: GeoTIFF or TIFF for geospatial imagery. PNG and JPEG inputs may be accepted only for the prescribed public benchmark datasets.
Mandatory Functional Scope
• Remote-sensing adaptation: At least one visual or vision-language component must be fine-tuned or otherwise adapted using BigEarthNet.txt or the any open source training data.
• Single-image baseline: Visual question answering shall be mandatory. Each solution must additionally implement either captioning/scene description or text-guided region grounding.
• Multi-image change analysis: Change description or change-based visual question answering from a bi-temporal image pair shall be mandatory. A spatial change map may also be generated where reference masks are available.
• Cross-modal pair analysis: The system must extract complementary information from a co-registered optical/multispectral and SAR image pair.
• Agentic orchestration: The system must automatically select, sequence, and execute the appropriate specialist models or tools according to the query and input configuration.
Representative Queries
• 'Describe the land-cover and major objects visible in this image.'
• 'Highlight the water body referred to in the query.'
• 'What changed between these two dates, and where did the change occur?'
• 'Use the optical and SAR images together to identify built-up and water-covered regions.'
• 'Has the built-up area increased, decreased, or remained unchanged?'
Agentic Model and Tool Orchestration The system may use multiple specialised components, such as a remote-sensing VQA or captioning model, a grounding model, a change-understanding or change-VQA model, and an opticalâ€“SAR fusion or information-extraction model.
• interpret the query and classify the requested task;
• check the number, modality, format, metadata, and compatibility of the input images;
• select one or more models or tools from a predefined registry;
• configure only permitted task parameters and execute the selected workflow;
• combine textual and spatial outputs, estimate confidence, and return visual evidence; and
• provide an auditable execution summary containing the selected task, model/tool names, and key parameters.
The controller may perform internal task planning; however, only the observable execution trace, including the selected task, models or tools, permitted parameters, and outputs will be evaluated. Internal reasoning text is neither required nor evaluated.
Expected Solution The expected solution is an interactive GUI or web application with an agentic remote-sensing AI backend. It should accept supported image inputs and natural-language queries, select the appropriate specialist workflow, and return evidence-grounded textual and visual results.
The solution should include:
• Input upload and compatibility checking.
• A remote-sensing-adapted vision-language component.
• Specialist tools for VQA, captioning or grounding, change understanding, and opticalâ€“SAR analysis.
• An agentic controller for task routing, tool execution, and output integration.
• Visual evidence, confidence information, execution summaries, and downloadable reports.
Each solution must demonstrate single-image VQA, one additional single-image task, multitemporal change understanding, opticalâ€“SAR paired-image analysis, and agentic model/tool orchestration. A generic LLM or VLM without remote-sensing adaptation will not satisfy the requirements.
Deliverables An interactive GUI or web application with an agentic remote-sensing AI backend, Codes and models including test and demonstration.
Implementation Scope The system shall support single optical/multispectral or SAR images, co-registered opticalâ€“SAR pairs, and bi-temporal pairs in GeoTIFF/TIFF or approved benchmark formats. It must perform single-image VQA, one additional single-image task, change analysis, opticalâ€“SAR joint analysis, and agentic model/tool selection through an interactive GUI or web application.
Evaluation/Judging Criteria Final evaluation will use prescribed public benchmark test subsets and an ISRO/SAC evaluation dataset. Scores will be normalised before combining different metrics.
Add 'Evaluation/Judging Criteria' table here Public benchmarks will be evaluated using the prescribed test splits. The ISRO/SAC evaluation set will contain pre-georeferenced and co-registered Cartosat-2S optical and RISAT SAR image pairs, with task-specific reference answers, labels, bounding boxes, or masks, as applicable. Evaluation annotations will not be disclosed to participating teams.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Remote-sensing imagery is widely used for agricultural monitoring, disaster management, urban planning, forest monitoring, water-resource assessment, infrastructure mapping, and environmental analysis. However, most existing remote-sensing AI solutions are developed as isolated applications for a si...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development, Cloud Infrastructure, GIS & Remote Sensing
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Spatial Data:** Involves processing mapping data, satellite imagery, or geofencing logic.
- **Expected Deliverables:** The final solution must include functional prototypes as described: The expected solution is an interactive GUI or web application with an agentic remote-sensing AI backend. It should accept supported image inputs and natural-language queries, select the appropriate s...

---

## 30. [SIH26171] On-device Visual Perception for Light-weight Browser Agents
**Theme:** Miscellaneous | **Department:** Department of Space / Indian Space Research Organisation

### 📖 Original Description
Background AI agents are becoming omnipresent in the current era and can play an important role in our digital interactions. If an agentic AI pipeline has access to our visual context, screen states, they can assist users in complex workflows and automate many tasks. Most of the agentic AI pipelines are deployed on server side which limits the type to data that a user can share with it. It would open a new dimension of possibilities, if a local agent is deployed on user machine particularly browser which can eliminate the need to share the sensitive data with the server. Local system generally has fewer resources than server and is unable to host a full-fledged pipeline therefore only the non-sensitive data such as structure of the screen, application fields etc can be sent to server for processing.
Modern browser APIs (such as WebGPU and WebAssembly) and local inference libraries (like ONNX Runtime Web and Transformers.js) have unlocked the ability to run lightweight machine learning models directly on the client. The aim is to bridge these two environments: leveraging the reasoning power of cloud or server based AI while strictly enforcing data privacy at the client side.
Description Participants are required to build a privacy-preserving vision agent which runs on browser. This involves implementing a client-side architecture where a local Vision Transformer (ViT) or equivalent computer vision model 'reads' the user's screen and takes decision based on that. If it requires the visual context to be sent to server, it shall sanitize the sensitive/PII data using DOM tags or any other method, before any network request is made. It should dynamically detect and redact sensitive elements. For example, blurring faces, blacking out passwords, and masking PII etc. Only this anonymized, unidentifiable data should be transmitted to the central server which should be aware for this redaction scheme and can process data accordingly. The server will then process the sanitized context and return actionable commands for the browser agent to execute. Participants must balance the trade-offs between inference latency and the accuracy.
Expected Solution A successful submission should include a working prototype consisting of client side extension and server that demonstrates the following:
Client-side (extension/JS) running in popular browsers (chrome, Firefox) components:
• Local Vision Processing: Implementation of a client-side vision model running in the browser (e.g., via WebGPU) that evaluates the current screen state.
• Privacy Preserving Filter: A mechanism for sanitizing sensitive or personal visual data. This can be achieved through local bounding-box redaction, semantic obfuscation, masking etc. This should be clearly demonstrated.
Server-side implementation components:
• Server Side Integration: The transmission of the anonymized visual context to a centralized LLM/VLM, which successfully interprets the sanitized data and returns the response which may be processed data to be again ingested by local client or an UI action (e.g., 'click the submit button,' 'scroll down') that the local client executes.
• Participants are free to use any offline deployable (open-source/open-weights) model on server side. During SIH they can use cloud hosted version of these. An end-to-end task assisting the user should be demonstrated.
Evaluation will be done on the following metrics:
1-Accuracy of visual context from screen â€“ 25% 2-Recall and precision for detection of sensitive/PII data â€“ 20% 3-Precision of redaction â€“ 20% 4-Client side resource utilization â€“ 20% 5-Overall end-to-end latency of the provided task -15%

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
AI agents are becoming omnipresent in the current era and can play an important role in our digital interactions. If an agentic AI pipeline has access to our visual context, screen states, they can assist users in complex workflows and automate many tasks. Most of the agentic AI pipelines are deploy...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Web/App Development, Cloud Infrastructure
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Expected Deliverables:** The final solution must include functional prototypes as described: A successful submission should include a working prototype consisting of client side extension and server that demonstrates the following: Client-side (extension/JS) running in popular browsers (chrom...

---

## 31. [SIH26173] iTantra -Indian Multilingual TTS & STT Aided Neural Transceiver Radio Access for low bitrate links
**Theme:** Miscellaneous | **Department:** Department of Space / Indian Space Research Organisation

### 📖 Original Description
Background As vocal audio information is very data intensive making it difficult to transmit through low data rate links. In alert and distress based scenarios Transmitting Audio information is critical instead of written message as it will be more inclusive and will cater to everyone even if they are literate or not.
Description Build an Android App with lightweight, highly accurate STT and TTS models for 10 Indian Languages (Hindi, Gujarati, Marathi, Kannada, Malayalam, Tamil, Telugu, Odia, Bengali, English) that runs locally on a low-power device. The systemâ€™s STT module when activated after detecting pauses and stoppages should form the sentences detected and must instantly and efficiently stream the data through wifi/Bluetooth connected embedded device or another phone with same application with minimal latency. The systems TTS module when activated after receiving the Text data should convert it into intelligible speech which will be played as a voice note and alert type messages will be announced at highest volume non-interruptible. To verify the complete loop two phones with same app one in TTS mode and another in STT mode can be connected via wifi or Bluetooth and it should work like a walkie talkie using push to talk feature, if turned off it should work like a phone.
Key Metrics for Evaluation
• Efficiency: Model size, App size (RAM/Flash footprint) and CPU usage during idle listening. (20%)
• Accuracy: Low Word Error Rate for STT and High human legibility and flow for TTS. (40%)
• Latency: The Time delay between the Words said and STT completion, Time delay between the text received and audio processed and played for TTS along with RTF (Real Time Factor). The time delta between the sentence said and the same sentence started as audio in another phone. (20%)
Software & Framework Restrictions
• Open-Source Only: The use of proprietary, closed-source, or commercial voice-activation SDKs is strictly prohibited.
• Allowed Frameworks: Teams must build their pipelines using open-source machine learning and TinyML frameworks. Recommended tools include TensorFlow Lite for Microcontrollers, PyTorch Mobile or similar.
• Fully Offline Working: Model or pipeline should work fully offline only and no internet hosted API based solutions are expected and encouraged for the STT or TTS.
Expected Solution Teams are expected to deliver a robust, deployable system architecture. A successful submission must strictly satisfy the following technical boundaries:
• Hardware & Runtime Environment: The Android application must run smoothly on Low and Mid rage mobile phones.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
As vocal audio information is very data intensive making it difficult to transmit through low data rate links. In alert and distress based scenarios Transmitting Audio information is critical instead of written message as it will be more inclusive and will cater to everyone even if they are literate...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, IoT & Hardware, Web/App Development
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Hardware Integration:** Requires interfacing with sensors, microcontrollers, or drones, managing telemetry data, and possibly edge computing.
- **Expected Deliverables:** The final solution must include functional prototypes as described: Teams are expected to deliver a robust, deployable system architecture. A successful submission must strictly satisfy the following technical boundaries: • Hardware & Runtime Environment: The Android ...

---

## 32. [SIH26174] AI Human Activity Recognition for On-board BAS Experiments
**Theme:** Miscellaneous | **Department:** Department of Space / Indian Space Research Organisation

### 📖 Original Description
Background As humanity aims for space missions such as BAS and lunar missions, real-time ground support becomes impossible due to communication delays. An AI-based HAR system acts as an on-board assistant that supports the execution of scientific experiments, ensuring the success of science beyond Earth's orbit.
In the space environment, AI-based HAR system may act as mission-critical support for astronauts. By tracking astronaut movements and activities in real time, HAR ensures scientific experiments and related protocols are executed flawlessly without requiring constant, high-bandwidth communication with mission control.
Description Challenge is to design and train an AI model that recognizes and validates the sequence of a pre-defined experiment using human activity recognition techniques.
Standalone operation: Space stations operate on restricted data bandwidth to Earth. Rather than streaming raw video to ground control, data is processed locally at the 'edge.' Inputs are given from fixed-payload cameras.
Dataset generation to train model for object detection, pose estimation and hand-object interaction based on the steps of the experiment.
Optional: Another challenge is that Standard 2D or ground-based 3D posture models fail because astronauts do not have a fixed 'up' or 'down' orientation. The AI model should use orientation-agnostic 3D Human Mesh Recovery (HMR) to track the astronautâ€™s body relative to the payload rack, not the floor.
Expected Solution
• The software should continuously process local video feeds to track the sequence of experiment.
• At the start or after each step, the model should suggest the next step to be performed.
• It should alert when a step is skipped or an out of sequence step is added. It should be a voice based alert.
• Using the live video, it should generate a timestamped and structured lightweight text file of the conducted steps with outcomes/ status.
• Stream the video of the experiment to specific IP and also store the video locally.
• A graphical user interface for monitoring the above activities.
• Deliverable: A trained AI model that runs on offline standalone system

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
As humanity aims for space missions such as BAS and lunar missions, real-time ground support becomes impossible due to communication delays. An AI-based HAR system acts as an on-board assistant that supports the execution of scientific experiments, ensuring the success of science beyond Earth's orbi...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Expected Deliverables:** The final solution must include functional prototypes as described: • The software should continuously process local video feeds to track the sequence of experiment. • At the start or after each step, the model should suggest the next step to be performed. • It should...

---

## 33. [SIH26189] AI-Powered Criminal Network Analysis System
**Theme:** Blockchain & Cybersecurity | **Department:** National Crime Records Bureau (NCRB), Women Safety Division

### 📖 Original Description
• Background Modern criminal activities are increasingly organized and interconnected. Criminals often operate through networks involving associates, intermediaries, financial channels, communication links,locations, and events. Law enforcement agencies collect large volumes of data from sources such as:
• FIRs and police reports
• Call Detail Records (CDRs)
• Financial transaction records
• Surveillance reports
• Social media intelligence
• Criminal history databases
• Intelligence agency reports Despite having access to this information, investigators frequently face challenges in identifying hidden relationships among suspects because the data is fragmented, unstructured, and distributed across multiple systems. Manual analysis can be slow, labor-intensive, and prone to missing critical connections.With advances in Artificial Intelligence (AI), Machine Learning (ML),Natural Language Processing (NLP), and Graph Analytics, it is now possible to automatically discover relationships, detect patterns, and generate insights that can assist investigators in understanding criminal networks more effectively.
• Description The objective is to develop an AI-powered system that can analyze large volumes of criminal and intelligence-related data to uncover hidden networks and relationships among individuals, organizations, locations,and events.
The system should:
• Collect and process data from multiple sources.
• Extract important entities such as people, locations, vehicles, phone numbers, and organizations.
• Build relationship maps showing how different entities are connected.
• Identify key individuals who play influential roles within criminal networks.
• Detect suspicious patterns and unusual activities.
• Assist investigators by providing visual and analytical insights.
• Expected Solution Develop an AI-powered system that automatically analyzes structured and unstructured crime-related data to uncover criminal networks,identify key influencers, detect suspicious patterns, and provide actionable intelligence for investigators.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Modern criminal activities are increasingly organized and interconnected. Criminals often operate through networks involving associates, intermediaries, financial channels, communication links,locations, and events. Law enforcement agencies collect large volumes of data from sources such as:
• FIRs ...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Expected Deliverables:** The final solution must include functional prototypes as described: Develop an AI-powered system that automatically analyzes structured and unstructured crime-related data to uncover criminal networks,identify key influencers, detect suspicious patterns, and provide a...

---

## 34. [SIH26190] Secure Digital Document Management System for Legal and Investigation Documents
**Theme:** Miscellaneous | **Department:** National Crime Records Bureau (NCRB), Women Safety Division

### 📖 Original Description
• Background Law enforcement agencies, courts, legal departments, and investigative organizations handle vast amounts of sensitive documents throughout the lifecycle of a case. These documents may include:
• FIRs and police reports
• Investigation records
• Witness statements
• Charge sheets
• Court filings
• Evidence records
• Forensic reports
• Legal notices and judgments Many organizations still rely on paper-based systems or fragmented digital storage solutions. This often leads to challenges such as:
• Difficulty in locating documents quickly
• Unauthorized access to confidential information
• Document tampering risks
• Lack of version control
• Inefficient collaboration between departments
• Delays in legal and investigative processes
• Poor auditability and compliance tracking As the volume of legal and investigation-related data continues to grow,there is an increasing need for a secure, centralized, and intelligent document management system that ensures data integrity, accessibility,confidentiality, and efficient case management.Modern technologies such as Cloud Computing, Artificial Intelligence (AI), Blockchain, Digital Signatures, and Secure Access Control can significantly improve the management and security of legal and investigative documents.
• Description The objective is to develop a Secure Digital Document Management System (DMS) that enables law enforcement agencies, legal institutions, and investigative departments to securely store, organize, manage,retrieve, and share sensitive legal and investigation documents.
The system should:
• Digitize and centralize document storage.
• Ensure secure access and confidentiality.
• Prevent unauthorized modifications.
• Maintain a complete audit trail of document activities.
• Enable efficient document search and retrieval.
• Support collaboration among authorized stakeholders.
• Ensure compliance with legal and regulatory requirements.
The challenge is to create a secure, scalable, and intelligent platform that streamlines document handling while preserving legal validity and evidentiary integrity.
• Expected Solution Develop a system to monitor and manage police assets throughout their lifecycle.

### 🤖 AI-Based Analysis

#### 🚁 High-Level Overview
Law enforcement agencies, courts, legal departments, and investigative organizations handle vast amounts of sensitive documents throughout the lifecycle of a case. These documents may include:
• FIRs and police reports
• Investigation records
• Witness statements
• Charge sheets
• Court filings
• Ev...

#### 🛠️ Low-Level Technical Understanding
- **Core Technology Stack:** AI/ML, Blockchain/Web3, Web/App Development, Cloud Infrastructure
- **AI/ML Components:** Requires building, training, or fine-tuning models (e.g., NLP for text, CV for images/video). Data preprocessing and integration of APIs or custom pipelines will be crucial.
- **Frontend/Backend:** Needs a robust web or mobile interface with a scalable backend (Node.js, Python/Django, etc.) and a secure database.
- **Blockchain Components:** Involves smart contract development, decentralized identity/storage, and ensuring tamper-proof records.
- **Expected Deliverables:** The final solution must include functional prototypes as described: Develop a system to monitor and manage police assets throughout their lifecycle....

---

