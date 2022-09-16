<template>
<div class="container-text">
    <h2 class="text-container mt-5">Moja Lista</h2>

    <div class="d-flex">
        <input v-model="task" type="text" placeholder="Treba mi..." class="form-control">
        <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
    </div>

    <!-- table bootstrap -->
    <table class="table table-boardered mt-5">
        <thead>
            <tr>
                <th scope="col">NAZIV</th>
                <th scope="col" class="text-center">#</th>
                <th scope="col" class="text-center">#</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tasks, index) in tasks" :key="index">
                <th>{{task.name}}</th>
                <td>Kolicina</td>
                <td>
                    <div class="text-center" @click="editTask(index)">
                        <span class="fa fa-pen"></span>
                    </div>
                </td>
                <td>
                    <div class="text-center" @click="deleteTask(index)">
                        <span class="fa fa-trash"></span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>


<script>
/* ne razumijem u cemu je problem, no kod gotovo svakog vuejs koda, stranica se zablokira te nestanu svi podaci osim nav i footera
ne znam kako popraviti, ali ostavljam kod zakomentirano ako znaci ista

export default{
    name: 'Moja Lista',
    props: {
        msg: String,
    },

    data(){
        return{
            task: 'Treba mi ... ',
            tasks: [
                {
                    name: "",
                }
            ]
        }
    },

    methods:{
        sumbitTask(){
            if(this.task.length === 0) return;

            if(this.editedTask === null){
            this.tasks.push({
                name: this.task,
            })
            }
            else{
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
                }

            this.task = '';
        },

        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index;
        }

    }
};
    
*/
</script>
