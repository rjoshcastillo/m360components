<template>
    <!-- add this line of code to the v-dialog if you want to enable click outside close modal -->
    <!-- @click:outside="closeDialog()" -->
    <v-dialog v-model="dialog" persistent width="500">
        <v-card class="modal-container">
            <div class="">
                <img v-if="isAlert" src="@/assets/alert-message-check.svg" alt="Alert Message Icon">
                <img v-else src="@/assets/message-check.svg" alt="Alert Message Icon">
            </div>
            <div class="item-spacing">
                <span class="title-text">
                    {{ cardTextTitle }}
                </span>
            </div>
            <div class="item-spacing">
                <span class="subtitle-text">
                    {{ cardTextSubTitle }}
                </span>
            </div>
            <div class="button_group item-spacing">
                <v-btn @click="onNo" class="cancel_button">{{ cancelText }}</v-btn>
                <v-btn @click="onYes" :style="{ backgroundColor: isAlert ? '#EB2D2D' : '#008DF0' }" class="confirm_button">{{ confirmText }}</v-btn>
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
        cancelText: {
            type: String,
            default: "Secondary",
            require: true,
        },
        confirmText: {
            type: String,
            default: "Primary",
            require: true,
        },
        isAlert: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    computed: {

    },
    methods: {
        onYes() {
            this.$emit('onYes');
        },
        onNo() {
            this.$emit('onNo');
        },
        // closeDialog() {
        //     this.$emit('closeDialog');
        // }
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
    flex-direction: row;
    width: 100%;
    justify-content: space-around;

    .cancel_button {
        width: 45%;
        height: 50px;
        padding: 8px, 16px, 8px, 16px;
        border-radius: 8px;
        border: 1px solid;
        color: #151C36;
    }

    .confirm_button {
        width: 45%;
        height: 50px;
        padding: 8px, 16px, 8px, 16px;
        border-radius: 8px;
        color: #ffff;
    }
}

.item-spacing {
    margin: 10px 0
}
</style>