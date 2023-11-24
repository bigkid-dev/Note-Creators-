from discord import SyncWebhook
import aiohttp
from django.conf import settings

def send_logs(message, username):
    # Initializing webhook
    webhook = SyncWebhook.from_url(
        settings.DISCORD_WEBHOOK
    )

    webhook.send(message, username=username)