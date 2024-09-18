# Internal ML Hackathon

## Instructions
- Team size must be 3 to 4 members.
- You are free to use any public datasets. No dataset will be given from our side.
- At the end, each team have to provide a 1-2 page document explaining the ML approach, models used, experiments, and conclusions.
- Submit complete source code with proper comments describing functions.
- Free to use any programming languages and frameworks.
- No copying from open-source platforms; using open-source models is allowed.
- Any form of cheating, including code plagiarism, will lead to disqualification.

## Evaluation Criteria
- Implementation Novelty: Originality and creativity of the solution.
- Code Presence: Completeness and organization of source code.
- Solution Completeness: How well the solution meets the problem statement.
- Idea Uniqueness: Uniqueness and innovation of the idea.
- Code Quality: Readability, maintainability, and documentation of the code.
  
# Problem Statements
---

## 1. EcoScan

### Background
Recycling is essential for environmental sustainability, but many individuals face challenges in correctly sorting their waste due to the complex and often region-specific recycling rules. Incorrect sorting can lead to contamination of recyclable materials, reducing the effectiveness of recycling efforts and increasing landfill waste. A key barrier to better recycling habits is the difficulty in identifying what materials are recyclable and how to properly dispose of them.

### Importance
Improving recycling practices can significantly reduce landfill waste, conserve natural resources, and lower the energy costs associated with producing new materials. An AI-powered tool that accurately identifies recyclable materials can empower individuals to make informed choices, leading to more effective recycling efforts and greater environmental impact.

### Problem Statement
**Input:** The user will capture or upload an image or video of a wastage item.  
**Output:** The system will separate each item as:
1. **Recyclable**
2. **Non-recyclable**
3. **Requires special disposal**

Additionally, the application should provide localized information about how to dispose of the item based on regional recycling guidelines.

The model should:
- Aim for a nominal accuracy rate (e.g., 60% or above) in distinguishing items.
- Robust to new and unseen items.
- Integrate seamlessly into a mobile or web application with a user-friendly interface.
  
The app should also:
- Offer a clear breakdown of items within the image or video (if multiple are present).
- Display actionable information based on the user’s location, such as specific instructions for recycling in their region.
  
### Challenge
The model must handle diverse image inputs, varying lighting conditions, and different item orientations while maintaining high classification accuracy.

---

## 2. SoundScape

### Background
In music production and remixing, separating individual instruments from a complete audio track is often necessary but challenging. Current separation techniques frequently introduce artifacts or incomplete isolation, making it difficult for musicians and producers to work with clean, isolated tracks. A tool that can separate instruments accurately would provide more control over audio tracks, enabling a wider range of creative possibilities for remixing, producing, and analyzing music.

### Importance
A precise instrument separation tool could significantly enhance the flexibility and creative potential for musicians, producers, and sound engineers. It could enable them to isolate, manipulate, and remix sounds without compromising the quality of the original track. This would revolutionize the remixing process, aid in music education, and offer new ways for musicians to interact with their creations.

### Problem Statement
**Input:** The user uploads a mixed audio file.  
**Output:** The system separates the audio into distinct tracks, including:
1. **Vocals** (must always be separated)
2. **Instruments** (the system should support separation of multiple instruments, such as guitar, drums, bass, piano, or others, depending on the track)

The separated tracks should be accessible in a web application that allows users to:
1. Visualize the different audio tracks.
2. Adjust the volume or mute individual tracks (both vocals and instruments) in real-time.
3. Export individual tracks or custom mixes.

The model should:
- Always separate vocals from the instrument tracks.
- Be capable of separating a variable number of instruments, depending on the complexity of the input.
- Minimize audio artefacts and reduce "bleeding" between the tracks for clear separation.
- Ensure high-quality audio output for both vocals and instruments.

### Challenge
The model must handle a wide variety of audio files with different instruments, varying complexities, and overlapping frequencies. The web application should be responsive, allowing users to adjust the audio tracks in real-time without noticeable delays or quality degradation.

---

## 3. GestureFlow

### Background
Traditional input devices like keyboards and mice are not always practical or accessible, particularly for individuals with mobility impairments or in environments where hands-free interaction is required. While voice control offers an alternative, it is limited in noisy environments or situations where vocal commands are inconvenient. Gesture-based interaction provides a promising solution by allowing users to control devices through natural hand movements, making it especially valuable in sectors like healthcare, industry, and accessibility.

### Importance
Gesture recognition technology can greatly enhance accessibility, enabling users with disabilities to interact with computers without traditional input devices. It is also valuable in sterile environments, such as operating rooms, or industrial settings where hands are occupied. By providing a hands-free, intuitive way to control devices, gesture-based systems can improve efficiency and enable new forms of human-computer interaction.

### Problem Statement
**Input:** The user interacts with a webcam or external camera, performing hand gestures.  
**Output:** The system recognizes predefined hand gestures and translates them into computer actions, such as:
1. **Click**
2. **Scroll**
3. **Navigate**
4. **... etc**

The application should allow users to:
1. Customize gesture-to-action mappings.
2. Train the system to recognize new, user-defined gestures.
3. Adjust gesture recognition sensitivity and define activation zones on the screen for more accurate control.

The model should:
- Recognize at least 5 predefined gestures with optimum accuracy.
- Adapt to different lighting conditions and various hand positions.
- Perform with low latency to ensure smooth, real-time interaction.

### Challenge
The gesture recognition model must be robust against environmental changes, such as varying lighting or backgrounds, and accurately distinguish between different hand movements. The desktop application should be responsive and provide a simple interface for gesture customization, allowing users to personalize the system based on their needs and preferences.

---

## 4. NutriAI

### Background
Accurately tracking nutritional intake is vital for maintaining a healthy lifestyle, but the manual process of logging meals and estimating portion sizes is often time-consuming and prone to errors. People frequently misjudge portion sizes or forget to log their meals, leading to inconsistent tracking. This lack of accurate nutritional data can make it difficult for users to meet their dietary goals, whether for weight management, disease prevention, or general wellness.

### Importance
An automated system for tracking nutrition could significantly improve the accuracy and ease of dietary monitoring. It can help users make informed decisions about their food choices by providing real-time estimates of nutritional content. This is especially important for individuals managing diet-related conditions such as obesity, diabetes, or cardiovascular diseases. With accurate feedback, users can better adhere to their dietary goals, leading to improved health outcomes.

### Problem Statement
**Input:** The user uploads or takes a photo of their meal.  
**Output:** The system provides:
1. **Nutritional estimates**: Calories, macronutrients (proteins, fats, carbohydrates), and key micronutrients (vitamins, minerals) based on the food items in the image.
2. **Personalized feedback**: Meal logging, progress tracking, and personalized recommendations aligned with the user’s dietary goals (e.g., weight loss, muscle gain, balanced nutrition).

The application should allow users to:
1. Automatically log their meals by simply taking a picture.
2. Track their nutritional intake over time, including daily, weekly, or monthly summaries.
3. Set dietary goals and receive personalized meal recommendations based on their objectives.

The model should:
- Identify multiple food items within a single image.
- Estimate nutritional content quickly and accurately across a wide range of food types and cuisines.

### Challenge
The model must handle diverse food presentations and cuisines, making accurate portion size estimates from varied perspectives and image qualities. The web/mobile application should have a user-friendly interface that processes images in real-time and allows for seamless meal tracking, even on the go.

---

## 5. EmotiMap

### Background
Understanding public sentiment and emotional reactions is crucial for making informed business decisions, shaping political strategies, and conducting social research. Current sentiment analysis tools are often limited to text, failing to capture the emotional depth expressed through images or facial expressions. Social media platforms, where users often share visual content, present an opportunity to gain more comprehensive insights into public sentiment by analyzing both text and visual data.

### Importance
A system that can analyze both facial expressions and text content from social media can provide organizations with deeper insights into public emotions. This could help businesses improve customer satisfaction, allow governments to respond better to public concerns, and enable researchers to study emotional trends during significant events. By understanding the full spectrum of emotional responses, organizations can tailor their actions to better meet the needs of their audiences.

### Problem Statement
**Input:** The system collects and processes data from social media platforms, analyzing:
- **Facial expressions** from images or videos.
- **Text content** from posts, comments, and messages.

**Output:** The system provides:
1. **Emotion classification**: Detects and classifies emotional states such as joy, anger, sadness, fear, and surprise.
2. **Emotion alerts**: Triggers alerts when significant shifts in emotional responses occur, such as a spike in negative reactions during an event.

The model should:
- Achieve a nominal accuracy across the two modalities (facial expressions and text).
- Process large datasets efficiently, ensuring real-time or near-real-time analysis of public sentiment.
- Focus on detecting fine-grained emotions and enable quick identification of emotional changes or trends during events.

### Challenge
The system must handle diverse types of unstructured social media data, where emotional cues may be expressed in indirect ways. The facial recognition model should work well across different demographics, lighting conditions, and image qualities. The text analysis model should understand context and sentiment effectively, while the overall system must process large volumes of data quickly and provide actionable insights.

---

## 6. SafeDrive

### Background
Road accidents are a leading cause of injury and death globally. While vehicle safety systems can monitor some aspects of driving, integrating data from multiple sources, including video feeds and sensor data, for real-time accident detection is still a challenge. Detecting accidents accurately and promptly can significantly enhance emergency response and potentially save lives.

### Importance
An advanced system that can analyze real-time video and image data to detect road accidents can improve emergency response times and offer valuable insights into accident causation. By providing immediate alerts to first responders and automating accident detection, such a system can contribute to enhanced road safety and more effective emergency management.

### Problem Statement
**Input:** The system analyzes:
- **Video**: Captured from cameras or roadside surveillance, providing real-time visual information of the traffic environment.
- **Images**: Static snapshots from the video feed or additional sources that offer detailed views of accident scenes.

**Output:** The system provides:
1. **Accident detection**: Determines whether an accident has occurred based on the visual data, indicating the presence of a collision or sudden impact.
2. **Incident alerts**: Sends real-time notifications to emergency services or relevant stakeholders if an accident is detected.

The model should:
- **Accurately detect accidents**: Achieve high precision in identifying collision events, reducing false positives and negatives.
- **Process video and image data**: Operate effectively with real-time video streams and image data to detect accidents promptly.
- **Provide real-time feedback**: Ensure minimal latency in detecting accidents and alerting emergency responders.

### Challenge
The system must handle varying visual conditions, including different weather scenarios, lighting, and road environments. The model should be robust against false positives from non-accident events and be capable of processing high-resolution video data efficiently. Real-time processing and accurate accident detection are critical for the system's effectiveness in enhancing road safety.

---

## 7. AgriVision

### Background
Precision agriculture leverages technology to optimize farming practices, but many small-scale farmers lack access to advanced tools and expertise. Monitoring crop health and soil conditions is crucial for maximizing yield and minimizing resource use, yet traditional methods often require costly technology and specialized knowledge. Accessible technology for analyzing agricultural data can greatly benefit farmers looking to improve their practices and outcomes.

### Importance
A system that provides actionable insights into crop health and soil conditions can help farmers make informed decisions, boost crop yields, and reduce environmental impact. By democratizing access to precision agriculture tools, small-scale farmers can utilize advanced technology to enhance their farming practices and achieve greater sustainability.

### Problem Statement
**Input:** The system analyzes:
- **Weather data**: Real-time and historical data on weather conditions affecting agriculture.
- **Soil sensor data**: Measurements of soil moisture, nutrient levels, and other parameters.

**Output:** The system provides:
1. **Crop health assessment**: Detects diseases, pests, and nutrient deficiencies based on weather and soil data.
2. **Soil condition monitoring**: Evaluates soil moisture levels, nutrient content, and other parameters from sensor data.
3. **Resource optimization recommendations**: Offers actionable suggestions for irrigation, fertilization, and pest control based on integrated data.

The model should:
- **Process multi-source data**: Combine weather and soil sensor information to deliver comprehensive insights.
- **Deliver actionable insights**: Provide practical recommendations for improving crop management and resource use.
- **Be accessible to farmers**: Ensure the system is user-friendly and provides valuable information without requiring extensive technical expertise.

### Challenge
The system must effectively analyze and integrate data from different sources, including weather conditions and soil measurements. It should handle variations in data quality and environmental factors while ensuring that recommendations are practical and easily actionable for farmers. Making the system accessible and useful to those with varying levels of technological expertise is crucial for its success and adoption.

