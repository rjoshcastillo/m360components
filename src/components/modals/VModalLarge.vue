<template>
    <v-dialog v-model="dialog" persistent width="637" @click:outside="closeDialog()">
        <div class="parent-container">
            <v-card class="dialog-container">
                <div class="left-container">
                    <div class="bottom-margin">
                        <v-img class="m360-icon" :src="require('@assets/m360-icon.svg')" alt="girlBG"></v-img>
                    </div>
                    <div class="bottom-margin">
                        <h3 class="title-text">Welcome to dashboard!</h3>
                    </div>
                    <div class="bottom-margin">
                        <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
                            quam
                            massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa.</p>
                    </div>
                    <div>
                        <v-buttons label="Get Started!" appendIcon="mdi-chevron-right" variant="primary" />
                    </div>
                </div>
                <div class="right-img">
                    <v-img :src="require('@assets/girl-bg-modal.svg')" alt="girlBG"></v-img>
                </div>
            </v-card>
        </div>
    </v-dialog>
</template>

<script>
export default {
    props: {
        dialog: {
            type: Boolean,
            required: true,
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
}

.bottom-margin {
    margin-bottom: 24px;
}

.m360-icon {
    width: 116px;
    height: 41.43px;
}

.left-container {
    width: 62%;
}

.right-img {
    position: absolute;
    bottom: 0;
    right: -20px;
}

::v-deep .v-dialog {
    box-shadow: none !important;
}
</style>