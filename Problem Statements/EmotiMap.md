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
