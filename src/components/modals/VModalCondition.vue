<template>
    <v-dialog v-model="dialog" persistent :width="$xsView ? 440 : ($phoneView ? 463 : ($tabletView ? 641 : 641))"
        @click:outside="closeDialog()">
        <v-card class="modal-container">
            <div class="close-dialog"><v-icon @click="closeDialog()" class="close-icon">mdi-close</v-icon></div>
            <div>
                <img :src="isAlert ? require('@assets/alert-message-check.svg') : require('@/assets/message-check.svg')"
                    alt="Alert Message Icon">
            </div>
            <div class="item-spacing">
                <span class="title-text">{{ cardTextTitle }}</span>
            </div>
            <div class="item-spacing">
                <span class="subtitle-text">{{ cardTextSubTitle }}</span>
                <slot></slot>
            </div>
            <div
                :class="[buttonCount === 2 || buttonCount === 3 ? 'button_group' : 'single_button', $phoneView ? 'mobile' : 'desktop', 'item-spacing']">
                <div v-if="showThirdButton" class="second-third-button-wrapper"
                    :class="{ 'phone_view_spacing': $phoneView }">
                    <div :class="{ 'width_button_group': $phoneView }"> <v-buttons class="button-spacing"
                            :width="buttonWidth" @click="onSecondAction" :block="$phoneView" :label="secondButtonText"
                            variant="secondary" /></div>
                    <div :class="{ 'width_button_group': $phoneView }"> <v-buttons :width="buttonWidth"
                            @click="onThirdAction" :label="thirdButtonText" :block="$phoneView" variant="secondary" />
                    </div>


                </div>
                <div v-if="showSecondButton && !showThirdButton"
                    :class="$phoneView ? 'width_button_group_mobile ' : 'width_button_group'">
                    <v-buttons v-if="showSecondButton" :block="true" @click="onSecondAction" :label="secondButtonText"
                        variant="secondary" />
                </div>
                <div v-if="showThirdButton">
                    <v-buttons :block="$phoneView"
                        :class="{ 'primary-button-spacing': buttonCount !== 2, 'primary-button-spacing_mobile': $phoneView }"
                        @click="onFirstAction" :label="firstButtonText" :variant="!isAlert ? 'primary' : 'danger'" />
                </div>

                <div v-if="showSecondButton && !showThirdButton"
                    :class="$phoneView ? 'width_button_group_mobile  phone_view_primary_spacing' : 'width_button_group'">
                    <v-buttons @click="onFirstAction" :block="true" :label="firstButtonText" 
                        :variant="!isAlert ? 'primary' : 'danger'" />
                </div>
                <div v-if="!showSecondButton && !showThirdButton">
                    <v-buttons @click="onFirstAction" :block="true" :label="firstButtonText"
                        :variant="!isAlert ? 'primary' : 'danger'" />
                </div>
            </div>

        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        dialog: {
            type: Boolean,
            required: true,
        },
        cardTextTitle: {
            type: String,
            default: "Modal Message Here",
            require: true,
        },
        cardTextSubTitle: {
            type: String,
            default: "Modal Message Here",
            require: true,
        },
        thirdButtonText: {
            type: String,
            default: "Tertiary",
            require: true,
        },
        secondButtonText: {
            type: String,
            default: "Secondary",
            require: true,
        },
        firstButtonText: {
            type: String,
            default: "Primary",
            require: true,
        },
        isAlert: {
            type: Boolean,
            required: false,
            default: false,
        },
        buttonWidth: {
            type: String,
            default: '124.5px',
            required: false,
        },
        buttonCount: {
            type: Number,
            default: 1,
            required: false,
        },
    },
    computed: {
        showSecondButton() {
            return this.buttonCount >= 2;
        },
        showThirdButton() {
            return this.buttonCount >= 3;
        }
    },
    methods: {
        onFirstAction() {
            this.$emit('onFirstAction');
        },
        onSecondAction() {
            this.$emit('onSecondAction');
        },
        onThirdAction() {
            this.$emit('onThirdAction');
        },
        closeDialog() {
            this.$emit('closeDialog');
        }
    },
}
</script>

<style lang="scss" scoped>
.modal-container {
    display: flex;
    flex-direction: column;
    padding: 32px 24px;
    justify-content: center;
    align-items: center;
}

.close-dialog {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
}

.close-icon {
    width: 24px;
    height: 24px;
    flex-grow: 0;
    object-fit: contain;

    color: #151C36;
}

.title-text {
    font-family: Satoshi;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #151C36;
}

.subtitle-text {
    font-family: Satoshi;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #151C36;
}

.button_group {
    display: flex;

    justify-content: space-between;
}

.button_group.mobile {
    
    flex-direction: column-reverse;
    width: 100%;
}

.button_group.desktop {
    flex-direction: row;
    width: 100%;
}


.single_button {
    width: 100%;
}

.width_button_group {
    width: 48%;
}

.width_button_group_mobile {
    width: 100%;
}
.phone_view_primary_spacing {
    margin-bottom: 18px;
}
.phone_view_spacing {
    margin-top: 16px;
}

.button-spacing {
    margin-right: 13px;
}

.div-button-spacing {
    margin-right: 16px;
}

.primary-button-spacing {
    margin-left: 80px;
}

.primary-button-spacing_mobile {
    margin: 0;
}


.second-third-button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.item-spacing {
    margin: 10px 0;
}
</style>
