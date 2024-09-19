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
