import { fakeRecord } from '@/common/fakeData'
import Header from '@/components/header/Header'
import { Statistics } from '@/utils/interface'
import { Table, TableProps, Tag } from 'antd'
import dayjs from 'dayjs'
import React, { useState } from 'react'

const columns: TableProps<Statistics.DataSourceType>['columns'] = [
  {
    title: '序号',
    dataIndex: 'order',
    key: 'order',
    width: 80,
    sorter: true,
    fixed: 'left',
    align: 'center',
    defaultSortOrder: 'descend'
  },
  {
    title: '比赛名称',
    dataIndex: 'raceName',
    key: 'raceName',
    width: 140,
    fixed: 'left',
    align: 'center'
  },
  {
    title: '比赛时间',
    dataIndex: 'raceTime',
    key: 'raceTime',
    fixed: 'left',
    width: 120,
    align: 'center',
    render: (raceTime) => {
      return dayjs(raceTime).format('YY/MM/DD HH:mm')
    }
  },
  {
    title: '正赛组',
    children: [
      {
        title: '一辩',
        dataIndex: 'player1',
        key: 'player1',
        align: 'center'
      },
      {
        title: '二辩',
        dataIndex: 'player2',
        key: 'player2',
        align: 'center'
      },
      {
        title: '三辩',
        dataIndex: 'player3',
        key: 'player3',
        align: 'center'
      },
      {
        title: '四辩',
        dataIndex: 'player4',
        key: 'player4',
        align: 'center'
      }
    ]
  },
  {
    title: '模辩',
    children: [
      {
        title: '模辩1',
        dataIndex: 'training1',
        key: 'training1',
        align: 'center'
      },
      {
        title: '模辩2',
        dataIndex: 'training2',
        key: 'training2',
        align: 'center'
      },
      {
        title: '模辩3',
        dataIndex: 'training3',
        key: 'training3',
        align: 'center'
      },
      {
        title: '模辩4',
        dataIndex: 'training4',
        key: 'training4',
        align: 'center'
      }
    ]
  },
  {
    title: '对手',
    dataIndex: 'opponent',
    key: 'opponent',
    width: 200
  },
  {
    title: '辩题',
    dataIndex: 'topic',
    key: 'topic',
    width: 450
  },
  {
    title: '持方',
    key: 'support',
    dataIndex: 'support',
    align: 'center',
    width: 100,
    render: (support) => (
      <span>
        {support === '正' ? (
          <Tag color="green">正</Tag>
        ) : (
          <Tag color="blue">反</Tag>
        )}
      </span>
    )
  },
  {
    title: '赛果',
    children: [
      {
        title: '胜负',
        dataIndex: 'win',
        key: 'win',
        align: 'center',
        width: 100
      },
      {
        title: '比分',
        dataIndex: 'rate',
        key: 'rate',
        align: 'center',
        width: 100
      },
      {
        title: '佳辩',
        dataIndex: 'best',
        key: 'best',
        width: 100
      }
    ]
  },
  {
    title: '赛年',
    dataIndex: 'year',
    key: 'year',
    width: 80,
    fixed: 'right',
    align: 'center'
  },
  {
    title: '赛季',
    dataIndex: 'season',
    key: 'season',
    width: 120,
    fixed: 'right',
    align: 'center'
  }
]

const index = () => {
  const [pageSize, setPageSize] = useState<number | undefined>(10)
  const [total, setTotal] = useState<number | undefined>(50)
  return (
    <div className=" w-full h-screen">
      <Header></Header>
      <div>
        <Table<Statistics.DataSourceType>
          rowKey="id"
          scroll={{
            x: 3000
          }}
          columns={columns}
          dataSource={fakeRecord}
          pagination={{
            total: total,
            showQuickJumper: true,
            pageSize: pageSize,
            pageSizeOptions: [5, 10, 20, 50, 100]
          }}
          onChange={(e) => console.log(e)}
          bordered
        ></Table>
      </div>
    </div>
  )
}

export default index
