import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select, Space, Upload } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

import styles from './index.module.less';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default () => {
  const handleChange = () => {};
  return (
    <>
      <div className={styles.formBd}>
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="分析目标">
            <Input.TextArea placeholder="例: 分析用户趋势" />
          </Form.Item>
          <Form.Item label="图表名称">
            <Input placeholder="例: 用户趋势表" />
          </Form.Item>
          <Form.Item label="图表类型">
            <Select
              defaultValue="zhexian"
              style={{ width: 90 }}
              onChange={handleChange}
              options={[
                { value: 'zhexian', label: '折线图' },
                { value: 'zhuzhuang', label: '柱状图' },
                { value: 'bing', label: '饼图' },
                { value: 'leida', label: '雷达图' },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="原始数据"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>上传原始数据</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                分析
              </Button>
              <Button type="default" htmlType="submit">
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
