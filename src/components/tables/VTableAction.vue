<template>
    <div>
        <v-card class="table-card-container">
            <v-data-table :headers="updatedHeaders" :items="displayedItems" :item-key="itemKey"
                :show-select="showSelect" :single-select="singleSelect" class="custom_table" hide-default-footer>
                <template v-slot:item.status="{ item }">
                    <v-pills :bgColor="getStatusColor(item.status)" :label="item.status" :pillWidth="'68px'"
                        :pillPadding="'8px 12px'" :pillHeight="'24px'"></v-pills>
                </template>
                <template v-if="enableAction" v-slot:item.action>
                    <span style="cursor: pointer;" class="action-text" @click="$emit('actionClicked')">Action<v-icon
                            size="x-large" color="#008DF0">mdi-dots-vertical</v-icon></span>
                </template>
            </v-data-table>
            <!-- CUSTOM PAGINATION -->
            <div class="pagination">
                <div class="pagination-left-text">
                    <span v-if="totalRows >= 1">
                        {{ showingEntries }}
                    </span>
                    <span v-else>
                        Showing 0 entries
                    </span>
                </div>
                <div class="pagination-controls">
                    <span class="pagination-button-text" @click="prevPage" :disabled="currentPage === 1">Previous</span>
                    <div class="page-numbers">
                        <span v-for="page in visiblePages" :key="page" @click="goToPage(page)"
                            :class="{ 'active': page === currentPage }">
                            {{ page }}
                        </span>
                    </div>
                    <span class="pagination-button-text" @click="nextPage"
                        :disabled="currentPage === totalPages">Next</span>
                </div>
            </div>
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
            type: Object,
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
            selected: [],
            currentPage: 1,
            itemsPerPage: 5,
            visiblePageRange: 1
        }
    },
    computed: {
        updatedHeaders() {
            const headers = [...this.headers];
            if (this.enableAction) {
                headers.push({ text: 'Action', value: 'action', sortable: false });
            }
            return headers;
        },
        totalRows() {
            return this.items.total;
        },
        totalPages() {
            return Math.ceil(this.totalRows / this.itemsPerPage);
        },
        visiblePages() {
            const range = 1;
            const start = Math.max(1, this.currentPage - range);
            const end = Math.min(this.totalPages, this.currentPage + range);

            const pages = [];

            if (this.currentPage - range > 1) {
                pages.push('...');
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (this.currentPage + range < this.totalPages) {
                pages.push('...');
            }

            return pages;
        },
        displayedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalRows);
            return this.items.data.slice(startIndex, endIndex);
        },
        hasFirstRow() {
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        toLastCurrentRow() {
            return Math.min(this.currentPage * this.itemsPerPage, this.totalRows);
        },
        showingEntries() {
            if (this.totalRows === 0) return 'Showing 0 entries';
            return `Showing ${this.hasFirstRow} to ${this.toLastCurrentRow} of ${this.totalRows} entries`;
        },
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
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }
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
    font-family: RobotoMono;
    font-size: 14px !important;
    font-weight: normal;
    color: #151C36 !important;
}

::v-deep thead {
    >tr {
        >th {
            >span {
                font-family: Satoshi !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                color: #151C36 !important;
            }
        }
    }
}

::v-deep .v-data-table {
    >.v-data-table__wrapper {
        >table {
            width: 100%;
            border-spacing: 0 1rem;
        }
    }
}

::v-deep .v-pagination__navigation {
    display: none;
}

.action-text {
    font-family: RobotoMono;
    font-size: 14px;
    font-weight: 500;
    color: #008DF0;
}

.pagination-left-text {
    font-family: Satoshi;
    font-size: 16px;
    font-weight: 500;
    color: #898989;
}

.pagination-button-text {
    font-family: Satoshi;
    font-size: 16px;
    font-weight: 500;
    color: #008DF0;
    cursor: pointer;
}

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
}


.pagination-controls {
    display: flex;
    align-items: center;
}

.page-numbers {
    display: flex;
    align-items: center;
    margin: 0 0 0 20px
}

.page-numbers span {
    margin: 0 5px;
    cursor: pointer;
    color: #008DF0;
    margin: 0 20px 0 0
}

.page-numbers span.active {
    font-weight: bold;
    color: #008DF0;
    padding: 8px 12px;
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px gray;
    background-color: var(--white);
}
</style>