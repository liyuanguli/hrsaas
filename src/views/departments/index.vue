<template>
  <div class="departments-container">
    <div class="app-container">
      <!-- 组织架构 头部 -->
      <el-card class="tree-card">
        <!-- 头部栏 -->
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
        <!-- 底下的树形结构 -->
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <!-- 作用域插槽 -->
          <tree-tools slot-scope="{ data }" :tree-node="data" @editDepts="editDepts" @delDepts="getDepartments" @addDepts="addDepts" />
        </el-tree>
      </el-card>
      <!-- /组织架构 头部 -->
    </div>
    <!-- 放置弹层组件 -->
    <add-dept ref="addDept" :show-dialog.sync="showDialog" :tree-node="node" @addDepts="getDepartments" />
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import AddDept from './components/add-dept' // 引入新增部门组件
import { getDepartments } from '@/api/departments'
import { tranListToTreeData } from '@/utils/index'
export default {
  name: '',
  components: {
    TreeTools,
    AddDept
  },
  props: {},
  data() {
    return {
      company: { name: '这是一个很赞的公司', manager: '负责人' }, // 头部数据
      departs: [{ name: '总裁办', manager: '东方龙', children: [{ name: '董事会', manager: '东方小龙' }] },
        { name: '行政部', manager: '东方虎' }, { name: '人事部', manager: '东方豹' }],
      defaultProps: {
        label: 'name'
      },
      showDialog: false, // 默认不显示弹层
      node: null // 记录当前点击的部门
    }
  },

  computed: {},

  watch: {},

  created() {
    this.getDepartments()
  },

  mounted() {},

  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.departs = tranListToTreeData(result.depts, '')
      this.company = { name: '这是一个很赞的公司', manager: '负责人', id: '' }
    },
    addDepts(node) {
      this.showDialog = true // 显示弹层
      this.node = node
    },
    editDepts(node) {
      this.showDialog = true
      this.node = node // 赋值操作的节点
      this.$refs.addDept.getDepartDetail(node.id) // 调用子组件方法获取部门详情
    }
  }
}
</script>
<style  scoped>
.tree-card{
  padding: 30px 140px;
  font-size: 14px;
}
</style>
