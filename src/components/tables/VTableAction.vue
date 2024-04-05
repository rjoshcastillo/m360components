<template>
    <v-simple-table>
        <template v-slot:default>
            <thead class="header">
                <tr class="row-header">
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Channels
                    </th>
                    <th class="text-left">
                        Last Active
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-center">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="row-header">
                    TESTING
                </tr>
                <!-- <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                </tr> -->
            </tbody>
        </template>
    </v-simple-table>
</template>
<script></script>
<style lang="scss" scope>
.header{
    background-color: #E8E8EB;
}
.row-header{
 margin: 10px;
}</style>