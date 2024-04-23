<template>
    <div>
        <!-- TABLE -->
        <div class="table-container item-spacing">
            <div class="mb-2">
                <h3>TABLE</h3>
            </div>
            <div>
                <v-table-action :headers="tableHeader" :items="tableData" :hideColumn="hideColumn"
                    @onChangeSort="updateSorterColumn"></v-table-action>
            </div>
        </div>
        <!-- MODAL -->
        <div class="modal-container item-spacing">
            <div class="mb-2">
                <h3>MODAL</h3>
            </div>
            <div>
                <v-buttons @click="openModalLarge" label="Modal Large" variant="primary" />
            </div>
        </div>
        <!-- MODAL-CONDITION -->
        <div class="modal-conditional-container item-spacing">
            <div class="mb-2">
                <h3>MODAL CONDITION</h3>
            </div>
            <div class="d-flex">
                <div class="mr-5">
                    <h4 class="mb-2">Simple Modal</h4>
                    <v-buttons @click="openModalCondition" label="Modal Condition" variant="primary" />
                </div>
                <div>
                    <h4 class="mb-2">Alert Modal</h4>
                    <v-buttons @click="openModalCondition_alert" label="Modal Condition" variant="warning" />
                </div>

            </div>
        </div>
        <!--CLICKABLE-CARD -->
        <div class="clickable-card-container item-spacing">
            <div class="mb-2">
                <h3>CLICKABLE CARD</h3>
            </div>
            <div class="d-flex mb-4">
                <v-card-clickable :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    :hover-description="'Phasellus ut arcu in leo mollis vehicula sed ut quam. Nulla eget libero maximus, eleifend nulla nec, rutrum lectus. Quisque scelerisque luctus purus, sed finibus erat placerat sed. Donec diam mi, interdum ut tellus ac, rhoncus viverra sapien. Aenean ac sem vitae urna molestie malesuada.'"
                    @cardClicked="openCardModal_Condition" :cardHeight="'255px'" :cardWidth="'363px'"
                    :fontColor="'white'" :backgroundColor="'#DA4175'" :hoverBackgroundColor="'#992e52'"></v-card-clickable>
                <v-card-clickable :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    @cardClicked="openCardModal_Condition" class="ml-5" :cardHeight="'255px'" :cardWidth="'363px'"
                    :fontColor="'#0062A8'" :backgroundColor="'#18E2CE'"></v-card-clickable>
            </div>
            <div class="d-flex mb-4">
                <v-card-clickable :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    @cardClicked="openCardModal_Condition" :cardHeight="'255px'" :cardWidth="'492px'"
                    :fontColor="'#992E52'" :backgroundColor="'#FFB838'"></v-card-clickable>
                <v-card-clickable :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    @cardClicked="openCardModal_Condition" class="ml-5" :cardHeight="'255px'" :cardWidth="'234px'"
                    :fontColor="'white'" :backgroundColor="'#6D3D91'"></v-card-clickable>
            </div>
        </div>
        <!--CARD BANNER -->
        <div class="card-banner-container item-spacing">
            <div class="mb-2">
                <h3>CARD BANNER</h3>
            </div>
            <div>
                <v-card-button @cardClicked="openCardButtonModal"></v-card-button>
            </div>
        </div>
        <!--CARD APPS -->
        <div class="card-apps-container item-spacing">
            <div class="mb-2">
                <h3>CARD APPS</h3>
            </div>
            <div class="cardapp-container">
                <v-card-app v-for="(card, index) in cards" :key="index" :imageUrl="card.imageUrl"
                    :description="card.description" :channel="card.channels" :time="card.time" :title="card.title"
                    @cardClicked="openCardModal"></v-card-app>
            </div>
        </div>
        <!--STEPPER -->
        <!-- <div class="stepper-container item-spacing">
            <div class="mb-2">
                <h3>STEPPER</h3>
            </div>
            <div>

            </div>
        </div> -->

        <!-- MODAL COMPONENT HERE -->
        <v-modal-large :dialog="showModalLarge" @closeDialog="closeModalLarge" :isImageEnabled="true"></v-modal-large>
        <v-modal-condition :dialog="showModalCondition" @closeDialog="closeModalCondition" @onYes="closeModalCondition" :buttonCount="2"
            @onNo="closeModalCondition"></v-modal-condition>
        <v-modal-condition :dialog="showModalCondition_alert" @closeDialog="closeModalCondition_alert"
            @onYes="closeModalCondition_alert" @onNo="closeModalCondition_alert" :isAlert="true" :buttonCount="2"></v-modal-condition>
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

import { SortOrder } from './enums';

export default {
    components: {

    },
    data() {
        return {
            hideColumn: ['test', 'nation'],
            showModalLarge: false,
            showModalCondition_alert: false,
            showModalCondition: false,
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
            ],
            tableData: [{
                id: 1,
                name: 'Dog Trainer',
                channel: '2 minutes ago',
                last_active: '22 hours ago',
                status: 'Completed'
            },
            {
                id: 2,
                name: 'Web Designer',
                channel: '3 days ago',
                last_active: '10 minutes ago',
                status: 'Completed'
            },
            {
                'id': 3,
                'name': 'Medical Assistant',
                'channel': '12 hours ago',
                'last_active': '12 hours ago',
                'status': 'Ongoing',
                'test': 'sample'
            },
            {
                id: 4,
                name: 'Marketing Coordinator',
                channel: '2 minutes ago',
                last_active: '2 hours ago',
                status: 'Completed',
                nation: 'test'
            },
            ],
            sorterColumns: [
                {
                    field: 'name',
                    order: SortOrder.ASC,
                },
                {
                    field: 'last_active',
                    order: SortOrder.ASC,
                },
                {
                    field: 'status',
                    order: SortOrder.ASC,
                }
            ]
        };
    },
    methods: {
        openModalCondition() {
            this.showModalCondition = true;
        },
        closeModalCondition() {
            this.showModalCondition = false;
        },
        openModalCondition_alert() {
            this.showModalCondition_alert = true;
        },
        closeModalCondition_alert() {
            this.showModalCondition_alert = false;
        },
        openModalLarge() {
            this.showModalLarge = true;
        },
        closeModalLarge() {
            this.showModalLarge = false;
        },
        openCardModal() {
            alert("Hey, you clicked me at card app!");
        },
        openCardModal_Condition() {
            alert("Hey, you clicked me at card condition!");
        },
        openCardButtonModal() {
            alert("Hey, you clicked me at card button!");
        },
        updateSorterColumn(sorterResult) {
            const sorterColumns = [...this.sorterColumns];

            // Check if the field is already in the sorterColumns array
            const index = sorterColumns.findIndex((sc) => sc.field === sorterResult.field);

            if (index !== -1) {
                // If the field is already in the sorterColumns array, toggle the sorting order
                const currentOrder = sorterColumns[index].order;
                if (currentOrder === 'asc') {
                    sorterColumns[index].order = 'desc';
                } else if (currentOrder === 'desc') {
                    sorterColumns[index].order = 'asc';
                }
            } else {
                // If the field is not in the sorterColumns array, add it with ascending order
                sorterColumns.unshift(sorterResult);
            }

            // Sort the tableData based on the updated sorting criteria
            this.tableData.sort((a, b) => {
                // Iterate through each sorting criteria
                for (const { field, order } of sorterColumns) {
                    // Compare the values of the field in each item
                    if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
                    if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
                }
                // If all criteria are equal, return 0
                return 0;
            });

            // Emit the sorted column to update the UI if needed
            this.$emit('onChangeSort', sorterColumns[0]);
        }

    },
    computed: {
        tableHeader() {
            return [
                {
                    text: 'Name',
                    class: 'cursor-pointer',
                    sortable: true,
                    type: 'name',
                    key: 'name',
                    sortOrder: this.sorterColumns.find((sc) => sc.field === 'name')?.order,
                    sorterIndex: this.sorterColumns.findIndex((sc) => sc.field === 'name'),
                },
                {
                    text: 'Channels',
                    class: '',
                    type: 'channel',
                },
                {
                    text: 'Last Active',
                    class: '',
                    sortable: true,
                    type: 'last_active',
                    key: 'last_active',
                    sortOrder: this.sorterColumns.find((sc) => sc.field === 'last_active')?.order,
                    sorterIndex: this.sorterColumns.findIndex((sc) => sc.field === 'last_active'),
                },
                {
                    text: 'Status',
                    class: '',
                    sortable: true,
                    type: 'status',
                    key: 'status',
                    sortOrder: this.sorterColumns.find((sc) => sc.field === 'status')?.order,
                    sorterIndex: this.sorterColumns.findIndex((sc) => sc.field === 'status'),
                },
                {
                    text: 'Action',
                    class: '',
                    action_enable: true,
                    type: 'action'
                },

            ];
        },
    },
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

.item-spacing {
    margin: 30px 0;
}
</style>
