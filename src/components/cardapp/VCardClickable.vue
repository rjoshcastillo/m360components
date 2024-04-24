<template>
    <div class="card-main">
        <v-card @click="$emit('cardClicked')" class="card-container" @mouseover="hoverNewItem = true"
            @mouseleave="hoverNewItem = false" :style="{
                backgroundColor: hoverNewItem ? hoverBackgroundColor : backgroundColor,
                width: cardWidth,
                height: cardHeight,
            }">
            <div class="header-card">
                <div class="title" v-if="!hoverNewItem">
                    <span class="title-text" :style="{
                color: fontColor,
            }">{{ title }}</span>
                </div>
                <div class="title" v-if="hoverNewItem">
                    <span class="title-text" :style="{
                color: fontColor,
            }">{{ hoverTitle }}</span>
                </div>
                <div>
                    <v-icon size="24" :color="fontColor" style="cursor: pointer;"
                        @click="$emit('cardClicked')">mdi-arrow-right</v-icon>
                </div>
            </div>
            <div class="description-card">
                <div class="subtitle" v-if="!hoverNewItem"><span class="description-text" :style="{
                color: fontColor,
            }">{{ description }}</span></div>
                <div class="subtitle" v-if="hoverNewItem"><span class="description-text" :style="{
                color: fontColor,
            }">{{ hoverDescription }}</span></div>
                <div class="img-setup" v-if="enableImage && !hoverNewItem">
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
        hoverTitle: {
            type: String,
            required: false,
            default: 'New Title Setup Other Channels'
        },
        description: {
            type: String,
            required: true,
            default: 'Ipsum odit eveniet sed architecto laboriosam cum dolore. '
        },
        hoverDescription: {
            type: String,
            required: false,
            default: 'New Description Setup Other Channels'
        },
        fontColor: {
            type: String,
            required: false,
            default: 'white'
        },
        backgroundColor: {
            type: String,
            required: false,
            default: '#18e2ce'
        },
        hoverBackgroundColor: {
            type: String,
            required: false,
            default: '#119e90'
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
        },
        enableImage: {
            type: Boolean,
            required: false,
            default: true
        }

    },
    data() {
        return {
            hoverNewItem: false,
            textLimit: 100
        };
    },
}
</script>

<style lang="scss" scoped>
.card-main {
    overflow: hidden;
}

.card-container {
    padding: 24px;
    border-radius: 8px;
    position: relative;
}

.header-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.description-card {
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

.img-setup {
    height: 350px;
    width: 350px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
    transform-origin: bottom right;
}

.title {
    width: 60%;
}

.subtitle {
    width: 60%;
}
</style>
