<template>
  <q-page padding>
    <q-table
      title="Daftar Menu Makan Dan Minum"
      :data="data"
      :columns="columns"
      row-key="No"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="No" :props="props">
            {{ props.row.No }}
          </q-td>
          <q-td key="Menu" :props="props">
            {{ props.row.Menu }}
          </q-td>
          <q-td key="Harga" :props="props">
            {{ props.row.Harga }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        { name: 'No', align: 'center', label: 'No', field: 'No', sortable: true },
        { name: 'Menu', label: 'Menu', align: 'center', field: 'Menu', sortable: true },
        { name: 'Harga', label: 'Harga', field: 'Harga', align: 'center', sortable: true }
      ],
      data: [
        {
          No: '1',
          Menu: 'Nasi Telur',
          Harga: 'Rp. 8.000'
        },
        {
          No: '2',
          Menu: 'Nasi Ikan',
          Harga: 'Rp. 10.000'
        },
        {
          No: '3',
          Menu: 'Nasi Ayam Goreng',
          Harga: 'Rp. 12.000'
        },
        {
          No: '4',
          Menu: 'Nasi Ayam Bakar',
          Harga: 'Rp. 13.000'
        },
        {
          No: '5',
          Menu: 'Nasi Rendang',
          Harga: 'Rp. 15.000'
        },
        {
          No: '6',
          Menu: 'Jus Buah',
          Harga: 'Rp. 6.000'
        },
        {
          No: '7',
          Menu: 'Minuman Botol',
          Harga: 'Rp. 7.000'
        },
        {
          No: '8',
          Menu: 'Es Buah',
          Harga: 'Rp. 10.000'
        }
      ]
    }
  }
}
</script>
