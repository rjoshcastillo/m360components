<template>
    <div class="d-flex flex-column">
        <!-- TABLE -->
        <div class="table-container item-spacing">
            <div class="mb-2">
                <h3>TABLE</h3>
            </div>
            <div>
                <v-table-action :headers="tableHeader" :items="tableData" :showSelect="true" :hideColumn="hideColumn"
                    @onChangeSort="updateSorterColumn" :enableAction="true"></v-table-action>
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
            <div class="d-flex flex-column">
                <div class="mr-5">
                    <h4 class="mb-2">Simple Modal</h4>
                    <v-buttons @click="openModalCondition" label="Modal Condition" variant="primary" />
                </div>
                <div>
                    <h4 class="mb-2">Alert Modal</h4>
                    <v-buttons @click="openModalCondition_alert" label="Modal Condition" variant="danger" />
                </div>

            </div>
        </div>
        <!--CLICKABLE-CARD -->
        <div class="clickable-card-container item-spacing">
            <div class="mb-2">
                <h3>CLICKABLE CARD</h3>
            </div>
            <div class="d-flex mb-4" :class="{ 'flex-column': $phoneView }">
                <v-card-clickable :class="{ 'mb-4': $phoneView }" :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    :hover-description="'Phasellus ut arcu in leo mollis vehicula sed ut quam. Nulla eget libero maximus, eleifend nulla nec, rutrum lectus. Quisque scelerisque luctus purus, sed finibus erat placerat sed. Donec diam mi, interdum ut tellus ac, rhoncus viverra sapien. Aenean ac sem vitae urna molestie malesuada.'"
                    @cardClicked="openCardModal_Condition" :cardHeight="'255px'" :cardWidth="'363px'"
                    :fontColor="'white'" :backgroundColor="'#DA4175'"
                    :hoverBackgroundColor="'#992e52'"></v-card-clickable>
                <v-card-clickable :class="{ 'ml-5': !$phoneView }" :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    @cardClicked="openCardModal_Condition" :cardHeight="'255px'" :cardWidth="'363px'"
                    :fontColor="'#0062A8'" :backgroundColor="'#18E2CE'"></v-card-clickable>
            </div>
            <div class="d-flex mb-4" :class="{ 'flex-column': $phoneView }">
                <v-card-clickable :class="{ 'mb-4': $phoneView }" :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    @cardClicked="openCardModal_Condition" :cardHeight="'255px'" :cardWidth="'492px'"
                    :fontColor="'#992E52'" :backgroundColor="'#FFB838'"></v-card-clickable>
                <v-card-clickable :class="{ 'ml-5': !$phoneView }" :title="'Setup Other Channels'"
                    :description="'Ipsum odit eveniet sed architecto laboriosam cum dolore.'"
                    @cardClicked="openCardModal_Condition" :cardHeight="'255px'" :cardWidth="'234px'"
                    :fontColor="'white'" :backgroundColor="'#6D3D91'"></v-card-clickable>
            </div>
        </div>
        <!--CARD BANNER -->
        <div class="card-banner-container item-spacing">
            <div class="mb-2">
                <h3>CARD BANNER</h3>
            </div>
            <div>
                <v-card-banner @cardClicked="openCardButtonModal" :imageEnable="true" :buttonEnable="true"
                    :subtitle="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"></v-card-banner>
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

        <!-- MODAL COMPONENT HERE -->
        <v-modal-large :dialog="showModalLarge" @closeDialog="closeModalLarge" :isImageEnabled="true"></v-modal-large>
        <v-modal-condition :dialog="showModalCondition" @closeDialog="closeModalCondition" @onYes="closeModalCondition"
            :buttonCount="1" @onNo="closeModalCondition"></v-modal-condition>
        <v-modal-condition :dialog="showModalCondition_alert" @closeDialog="closeModalCondition_alert"
            @onYes="closeModalCondition_alert" @onNo="closeModalCondition_alert" :isAlert="true"
            :buttonCount="2"></v-modal-condition>
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
            tableHeader: [
                {
                    text: 'Name',
                    type: 'name',
                    value: 'name',
                    sortable: true
                },
                {
                    text: 'Channels',
                    key: 'channel',
                    value: 'channel',
                    sortable: false
                },
                {
                    text: 'Last Active',
                    type: 'last_active',
                    value: 'last_active',
                    sortable: true

                },
                {
                    text: 'Status',
                    type: 'status',
                    value: 'status',
                    sortable: true
                },
            ],
            tableData: {
                data: [
                    {
                        "id": 1,
                        "name": "Dog Trainer",
                        "channel": "2 minutes ago",
                        "last_active": "22 hours ago",
                        "status": "Completed"
                    },
                    {
                        "id": 2,
                        "name": "Web Designer",
                        "channel": "3 days ago",
                        "last_active": "10 minutes ago",
                        "status": "Completed"
                    },
                    {
                        "id": 3,
                        "name": "Medical Assistant",
                        "channel": "12 hours ago",
                        "last_active": "12 hours ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 4,
                        "name": "Marketing Coordinator",
                        "channel": "2 minutes ago",
                        "last_active": "2 hours ago",
                        "status": "Completed"
                    },
                    {
                        "id": 5,
                        "name": "Software Engineer",
                        "channel": "1 day ago",
                        "last_active": "1 hour ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 6,
                        "name": "Graphic Designer",
                        "channel": "1 week ago",
                        "last_active": "1 day ago",
                        "status": "Completed"
                    },
                    {
                        "id": 7,
                        "name": "Data Analyst",
                        "channel": "1 month ago",
                        "last_active": "1 week ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 8,
                        "name": "Customer Support Representative",
                        "channel": "2 hours ago",
                        "last_active": "30 minutes ago",
                        "status": "Completed"
                    },
                    {
                        "id": 9,
                        "name": "Project Manager",
                        "channel": "2 weeks ago",
                        "last_active": "2 days ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 10,
                        "name": "Sales Associate",
                        "channel": "1 hour ago",
                        "last_active": "30 minutes ago",
                        "status": "Completed"
                    },
                    {
                        "id": 11,
                        "name": "Content Writer",
                        "channel": "3 weeks ago",
                        "last_active": "1 week ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 12,
                        "name": "Accountant",
                        "channel": "5 days ago",
                        "last_active": "1 day ago",
                        "status": "Completed"
                    },
                    {
                        "id": 13,
                        "name": "HR Manager",
                        "channel": "1 month ago",
                        "last_active": "1 day ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 14,
                        "name": "Legal Counsel",
                        "channel": "3 days ago",
                        "last_active": "1 hour ago",
                        "status": "Completed"
                    },
                    {
                        "id": 15,
                        "name": "Quality Assurance Specialist",
                        "channel": "2 weeks ago",
                        "last_active": "2 days ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 16,
                        "name": "Network Administrator",
                        "channel": "2 months ago",
                        "last_active": "1 week ago",
                        "status": "Completed"
                    },
                    {
                        "id": 17,
                        "name": "Research Scientist",
                        "channel": "4 weeks ago",
                        "last_active": "1 week ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 18,
                        "name": "Event Coordinator",
                        "channel": "3 months ago",
                        "last_active": "2 weeks ago",
                        "status": "Completed"
                    },
                    {
                        "id": 19,
                        "name": "Architect",
                        "channel": "1 year ago",
                        "last_active": "1 month ago",
                        "status": "Ongoing"
                    },
                    {
                        "id": 20,
                        "name": "Financial Analyst",
                        "channel": "6 months ago",
                        "last_active": "1 month ago",
                        "status": "Completed"
                    }],
                total: 20

            },
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

.modal-container,
.modal-conditional-container {
    display: flex;
    flex-direction: column;
}
</style>
