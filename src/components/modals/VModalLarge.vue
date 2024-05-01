<template>
    <v-dialog v-model="dialog" persistent :width="isImageEnabled && !$phoneView ? '637' : '415'"
        @click:outside="closeDialog()">
        <div class="parent-container">
            <v-card class="dialog-container"
                :class="{ 'dialog-container-noimage': !isImageEnabled, 'dialog-container-noimage': $phoneView }">
                <div class="left-container" :class="{ 'left-container-no-image': !isImageEnabled }">
                    <div class="bottom-margin">
                        <v-img class="m360-icon" :src="require('@assets/m360-icon.svg')" alt="m360Icon"></v-img>
                    </div>
                    <div class="bottom-margin">
                        <h3 class="title-text">{{ dialogTitle }}</h3>
                    </div>
                    <div class="bottom-margin">
                        <p class="description-text">{{ dialogDescription }}</p>
                    </div>
                    <div>
                        <v-buttons :block="!isImageEnabled || $phoneView" :label="buttonLabel" :appendIcon="buttonIcon"
                            :variant="buttonVariant" />
                    </div>
                </div>
                <div v-if="isImageEnabled && !$phoneView" class="right-img">
                    <v-img :src="leftImage" alt="girlBG"></v-img>
                </div>
            </v-card>
        </div>
    </v-dialog>
</template>

<script>
import defaultImage from '@/assets/girl-bg-modal.svg';
export default {
    props: {
        dialog: {
            type: Boolean,
            required: true,
        },
        dialogTitle: {
            type: String,
            required: false,
            default: 'Welcome to dashboard!'
        },
        dialogDescription: {
            type: String,
            required: false,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus necquam massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa.'
        },
        isImageEnabled: {
            type: Boolean,
            required: false,
            default: true
        },
        buttonVariant: {
            type: String,
            required: false,
            default: 'primary'
        },
        buttonLabel: {
            type: String,
            required: false,
            default: 'Get Started!'
        },
        buttonIcon: {
            type: String,
            required: false,
            default: 'mdi-chevron-right'
        },
        leftImage: {
            type: String,
            required: false,
            default: defaultImage
        }
    },

    methods: {
        closeDialog() {
            this.$emit('closeDialog');
        }
    }
}
</script>

<style lang="scss" scoped>
.parent-container {
    position: relative;
    padding: 20px;
}

.dialog-container {
    display: flex;
    flex-direction: row;
    padding: 32px;
    background-color: #E6F4FE;
    border-radius: 20px;

}

.dialog-container-noimage {
    width: 100%;

    .left-container {
        width: 100%;
    }

    .right-img {
        width: 0;
    }
}

.left-container {
    width: 62%;
}

.right-img {
    position: absolute;
    bottom: 0;
    right: -20px;
}

.left-container-no-image {
    width: 100%;
}

.title-text {
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 900;
    color: #151C36;
}

.description-text {
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 500;
    color: #606060;
    align-self: stretch;
}

.bottom-margin {
    margin-bottom: 24px;
}

.m360-icon {
    width: 116px;
    height: 41.43px;
}


::v-deep .v-dialog {
    box-shadow: none !important;
}
</style>