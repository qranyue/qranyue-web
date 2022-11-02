import { Dep, getDep } from '@/services/dep';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { ProTable } from '@ant-design/pro-table';
import { useCallback, useMemo } from 'react';

const DepPage = () => {
  const optionRender = useCallback<NonNullable<ProColumns<Dep>['render']>>((_v, _r, _i, action) => {
    const edit = () => action?.reload();
    const remove = () => action?.reload();
    return [<a key="edit" onClick={edit} children="编辑"></a>, <a key="remove" onClick={remove} children="删除"></a>];
  }, []);

  const columns = useMemo<ProColumns<Dep>[]>(
    () => [
      { dataIndex: 'name', title: '名称', width: 130 },
      { dataIndex: 'code', title: '编码', width: 120 },
      { dataIndex: 'contact', title: '联系人', width: 130 },
      { dataIndex: 'phone', title: '手机号码', width: 120 },
      { dataIndex: 'option', title: '操作', valueType: 'option', fixed: 'right', render: optionRender },
    ],
    [],
  );

  return (
    <PageContainer title="部门管理">
      <ProTable<Dep, Dep> rowKey="id" columns={columns} request={getDep}></ProTable>
    </PageContainer>
  );
};

export default DepPage;
