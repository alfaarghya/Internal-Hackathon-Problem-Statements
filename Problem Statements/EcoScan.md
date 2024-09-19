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
