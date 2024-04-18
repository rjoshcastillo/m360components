<template>
    <div>
        <v-simple-table class="table-setup">
            <template v-slot:default>
                <thead class="row-header">
                    <tr scope="col">
                        <th scope="col" v-for="(col, index) in filteredHeaders" :key="index" class="column-header"
                            @click="handleColHeaderClick(col)">
                            <span class="col-text d-flex"
                                :style="{ justifyContent: !!col.action_enable ? 'center' : 'flex-start' }">
                                <span>
                                    {{ col.text }}
                                </span>
                                <span class="ml-2" v-if="!!col.sortable">
                                    <v-icon :color="col.sorterIndex === 0 && !!col.sortOrder ? 'primary' : 'black'"
                                        small>{{
                            !col.sortOrder
                                ? 'mdi-sort'
                                : col.sortOrder === 'asc'
                                    ? 'mdi-sort-ascending'
                                    : 'mdi-sort-descending'
                        }}</v-icon>
                                </span>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(filteredItem, index) in filteredItems" :key="index">
                        <td v-for="(i, iindex) in filteredItem" :key="iindex" class="table-cell">
                            <template v-if="iindex === 'status'">
                                <v-chip :color="getStatusColor(filteredItem[iindex])">
                                    <span class="col-text" style="color: #fff;">{{ filteredItem[iindex] }}</span>
                                </v-chip>
                            </template>
                            <template v-else-if="iindex === 'action'">
                                <div class="d-flex align-center">
                                    <span class="action-text">Action
                                        <v-icon size="x-large" color="#008DF0">mdi-dots-vertical</v-icon>
                                    </span>
                                </div>
                            </template>
                            <template v-else>
                                <span class="col-text">{{ filteredItem[iindex] }}</span>
                            </template>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
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

        headers: {
            type: Array,
        },
        items: {
            type: Array,
        },
        hideColumn: {
            type: Array
        }
    },
    computed: {
        filteredHeaders() {
            return this.headers.filter(col => !this.hideColumn.includes(col.type));
        },
        filteredItems() {
            return this.items.map(item => {
                const filteredItem = {};
                this.filteredHeaders.forEach(header => {
                    filteredItem[header.type] = item[header.type];
                });
                return filteredItem;
            });
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
        handleColHeaderClick(columnHeader) {
            if (!columnHeader.sortable) return;

            const sorterResult = { field: columnHeader.key, order: 'asc' };

            switch (columnHeader.sortOrder) {
                case 'asc':
                    this.$emit('onChangeSort', { ...sorterResult, order: 'desc' });
                    break;
                case 'desc':
                    this.$emit('onChangeSort', { ...sorterResult, order: undefined });
                    break;
                default:
                    this.$emit('onChangeSort', sorterResult);
                    break;
            }
        },
    }
}
</script>
<style lang="scss" scope>
.v-data-table {
    >.v-data-table__wrapper {
        >table {
            width: 100%;
            border-spacing: 0 1rem;
        }
    }
}

.row-header {
    margin-bottom: 10px;
}

.row-header tr {
    background-color: #E8E8EB;
}

tr {
    border-radius: 8px;
    border-bottom: 0 !important;
}

.column-header,
.table-cell {
    margin-right: 16px;
}

.col-text {
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 500;
}

.action-text {
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 500;
    color: #008DF0;
    cursor: pointer;
}

.cursor-pointer {
  cursor: pointer;
}
</style>