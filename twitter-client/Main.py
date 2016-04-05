from TwitterClient import TwitterClient
from TwitterStreamListener import TwitterStreamListener


def test_twitter_client():
    client = TwitterClient()
    tweets = client.get_tweets_by_hashtag("helloworld", 10)

def test_twitter_client_images():
    client = TwitterClient()
    images = client.get_images_by_hashtag("helloworld", 10)

def test_twitter_streaming():
    client = TwitterClient()
    client.stream_by_hashtag("helloworld")

if __name__ == "__main__":
    test_twitter_client()
    test_twitter_client_images()
    test_twitter_streaming()
