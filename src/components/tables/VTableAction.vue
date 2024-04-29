<template>
    <div>
        <v-card class="table-card-container">
            <v-data-table v-model="selected" :headers="headers" :items="items" :item-key="itemKey"
                :show-select="showSelect" :single-select="singleSelect" class="custom_table"
                hide-default-footer>
                <template v-slot:item.status="{ item }">
                    <v-pills :bgColor="getStatusColor(item.status)" :label="item.status">
                        {{ item.status }}
                    </v-pills>
                </template>

            </v-data-table>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'TableAction',

    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        itemKey: {
            type: String,
            default: '',
        },
        singleSelect: {
            type: Boolean,
            default: false,
        },

        showSelect: {
            type: Boolean,
            default: false,
        },

        headers: {
            type: Array,
        },
        items: {
            type: Array,
        },
        hideColumn: {
            type: Array
        },
        enableAction: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            selected: []
        }

    },
    methods: {
        getStatusColor(status) {
            switch (status) {
                case 'Completed':
                    return '#21C434';
                case 'Ongoing':
                    return '#FFB838';
                case 'Reject':
                    return '#EB2D2D';
                default:
                    return '';
            }
        },
    }
}
</script>
<style scoped lang="scss">
.table-card-container {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    padding: 24px
}

::v-deep .theme--light.v-data-table .v-data-footer {
    border: 0
}

::v-deep .custom_table table tbody tr td {
    border-bottom: 1px solid var(--color-color-gray-neutral-gray-50, #E8E8E8) !important;
    border-top: 1px solid var(--color-color-gray-neutral-gray-50, #E8E8E8) !important;
}

::v-deep .custom_table table tbody tr td:first-child {
    border-left: 1px solid var(--color-color-gray-neutral-gray-50, #E8E8E8) !important;
}

::v-deep .custom_table table tbody tr td:last-child {
    border-right: 1px solid var(--color-color-gray-neutral-gray-50, #E8E8E8) !important;
}

::v-deep .custom_table thead th {
    background-color: #f0f2f5;

    &:first-child {
        border-radius: 8px 0 0 8px;
    }

    &:last-child {
        border-radius: 0 8px 8px 0;
    }
}

::v-deep .custom_table tbody td {
    &:first-child {
        border-radius: 8px 0 0 8px;
    }

    &:last-child {
        border-radius: 0 8px 8px 0;
    }
}

::v-deep .text-start {
    font-family: Satoshi !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    color: #151C36 !important;
}

::v-deep .v-data-table {
    >.v-data-table__wrapper {
        >table {
            width: 100%;
            border-spacing: 0 1rem;
        }
    }
}
</style>