# Software Requirements Specification

## User Personas

### Persona 1: Regular User - Subhadeep

**Background**:

- Alex, a 28-year-old tech professional, is an avid user of social media platforms.
- Regularly checks Twitter to stay updated on industry news, follow colleagues, and explore new technological developments.

**Current Aspirations in Life**:

- Aiming to develop advanced skills in artificial intelligence and machine learning.
- Dreaming of traveling to Japan to immerse in its unique culture and cutting-edge technology.
- Passionately working on creating a Massively Multiplayer Online Role-Playing Game (MMORPG).

**Primary Challenges**:

- Juggling a busy work schedule with aspirations for skill development.
- Planning and saving for an international trip.
- Overcoming technical challenges in MMORPG game development.


### Persona 2: Hideo Kojima - Creator

**Background**:

- Hideo Kojima, a renowned creator and game designer, utilizes Twitter for professional networking and content sharing.
- Checks Twitter to post updates about his recent podcasts and follow other influential figures in the industry.

**Current Aspirations in Life**:

- Aiming to promote his podcast to achieve a specific growth target.
- Actively seeking sponsors for the podcast to enhance its reach and quality.
- Connecting with potential future guests to feature on the podcast.

**Primary Challenges**:

- Balancing time between creative endeavors and professional networking.
- Strategizing effective ways to monetize and sustain the podcast.
- Identifying and reaching out to potential high-profile guests.

## User Stories

### Regular User

1. As a User, he should be able to create an account easily to start using the platform.
1. As a User, he should be able to visit another user's profile without logging in.
1. As a User, he should be able to add a profile picture to personalize his profile.
1. As a User, he should be able to add a background picture to enhance his profile aesthetics.
1. As a User, he should be able to follow other users to stay updated about their updates.
1. As a User, he should be able to send follow requests to connect with users who want to filter out who they wan't to be followed by.

### Creator

1. As a Creator, he should be able to easily add a blog post to share insights with his followers.
1. As a Creator, he should be able to track and analyze podcast growth metrics.
1. As a Creator, he should be able to follow other influential figures in the industry to stay updated.
1. As a Creator, he should be able to efficiently engage with his followers through tweets and replies.

## Database Design:

**Tables**:

1. Users:
 
- UserID (Primary Key)
- Username
- Password (encrypted)
- Email
- Profile information

2. Tweets:
 
- TweetID (Primary Key)
- UserID (Foreign Key)
- Tweet content
- Timestamp

3. Followers:
 
- FollowerID (Primary Key)
- UserID (Foreign Key - user being followed)
- FollowerUserID (Foreign Key - user following)

4. Notifications:
 
- NotificationID (Primary Key)
- UserID (Foreign Key)
- Notification content
- Timestamp

5. Trends:
 
- TrendID (Primary Key)
- Hashtag
- TweetID (Foreign Key)
