<template>
    <div class="card-main">
        <v-card @click="$emit('cardClicked')" class="card-container" :style="{
            backgroundColor: backgroundColor,
            width: cardWidth,
            height: cardHeight
        }">
            <div class="header-card">
                <div class="title">
                    <span class="title-text" :style="{
            color: fontColor,
        }">{{ title }}</span>
                </div>
                <div>
                    <v-icon size="24" :color="fontColor" style="cursor: pointer;" @click="$emit('cardClicked')">mdi-arrow-right</v-icon>
                </div>
            </div>
            <div class="description-card">
                <div class="subtitle"><span class="description-text" :style="{
            color: fontColor,

        }">{{ description }}</span></div>
                <div class="img-setup">
                    <v-img :src="imageUrl" alt="image background" />
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import headphoneBG from '@/assets/headphone-bg.png'
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: 'Setup Other Channels'
        },
        description: {
            type: String,
            required: true,
            default: 'Ipsum odit eveniet sed architecto laboriosam cum dolore. '
        },
        fontColor: {
            type: String,
            required: false,
            default: 'white'
        },
        backgroundColor: {
            type: String,
            required: false,
            default: '#151C36'
        },
        cardWidth: {
            type: String,
            required: false,
            default: '363px'
        },
        cardHeight: {
            type: String,
            required: false,
            default: '255px'
        },
        imageUrl: {
            type: String,
            required: false,
            default: headphoneBG
        }
    }
}
</script>

<style lang="scss" scoped>
.card-main{
    overflow: hidden;
}
.card-container {
    padding: 24px;
    border-radius: 8px;
}

.header-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.description-card{
    display: flex;
    flex-direction: row;
}
.title-text {
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 900;
}

.description-text {
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 500;
}
.img-setup{

    height: 350px;
    width: 350px;
    transform: rotate(45deg);
    position: absolute;
    top: 100px;
    left: 100px;
}
.title{
    width: 60%;
}
.subtitle{
    width: 60%;
}

</style>
