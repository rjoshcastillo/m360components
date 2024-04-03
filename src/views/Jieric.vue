<template>
    <div>
        <br />
        <h3>CARD APP</h3>
        <br />
        <div class="cardapp-container">
            <v-card-app v-for="(card, index) in cards" :key="index" :imageUrl="card.imageUrl"
                :description="card.description" :channel="card.channels" :time="card.time"
                :title="card.title"></v-card-app>
        </div>

        <br />
        <h3>CARD</h3>
        <!-- <v-card-custom></v-card-custom> -->
    </div>
</template>
<script>
import aiWriter from '@assets/icons/card-icons/ai-writer.svg';
import airplaneAuto from '@assets/icons/card-icons/airplane-auto.svg';
import baronAi from '@assets/icons/card-icons/baron-ai.svg';
import cardinal from '@assets/icons/card-icons/cardinal.svg';
import doctalScheduler from '@assets/icons/card-icons/doctal-scheduler.svg';
import formed from '@assets/icons/card-icons/formed.svg';
import secureFrame from '@assets/icons/card-icons/secure-frame.svg';
import visualizeeAi from '@assets/icons/card-icons/visualizee-ai.svg';

export default {
    components: {

    },
    data() {
        return {
            cards: [
                {
                    "imageUrl": formed,
                    "time": "2 hours ago",
                    "title": "Formed",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["messenger", "instagram", "viber", "mail", "sms"]
                },
                {
                    "imageUrl": secureFrame,
                    "title": "Secure Frame",
                    "time": "3 days ago",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["mail", "sms"]
                },
                {
                    "imageUrl": baronAi,
                    "title": "Baron AI",
                    "time": "10 minutes ago",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["messenger", "instagram", "viber", "whatsapp"]
                },
                {
                    "imageUrl": airplaneAuto,
                    "title": "Airplane Automatic",
                    "time": "2 hours ago",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["messenger", "instagram", "viber", "whatsapp"]
                },
                {
                    "imageUrl": doctalScheduler,
                    "time": "22 hours ago",
                    "title": "Doctal Scheduler",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["messenger", "instagram", "viber", "whatsapp"]
                },
                {
                    "imageUrl": aiWriter,
                    "time": "22 hours ago",
                    "title": "AI Writer",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["messenger", "instagram", "viber", "whatsapp"]
                },
                {
                    "imageUrl": visualizeeAi,
                    "title": "Visualizee AI",
                    "time": "22 hours ago",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["messenger", "instagram", "viber", "whatsapp"]
                },
                {
                    "imageUrl": cardinal,
                    "time": "2 hours ago",
                    "title": "Cardinal",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere turpis quis molestie. Sed luctus, augue eu consectetur interdum, sem dolor consequat ligula.",
                    "channels": ["messenger", "instagram", "viber", "whatsapp"]
                },
            ]
        };
    }
}
</script>
<style scoped lang="scss">
.cardapp-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    >* {
        margin-bottom: 20px;
        margin-right: 20px;
    }
}
</style>

