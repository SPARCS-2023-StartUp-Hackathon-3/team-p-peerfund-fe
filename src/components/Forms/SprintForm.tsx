import React, { FunctionComponent, CSSProperties, useState } from 'react';
import CommonForm from '@/components/CommonForm';
import { fullColumn } from './meta';

import { DatePicker, Form, Select, Radio, Button } from 'antd';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;
type RangeValue = [Dayjs | null, Dayjs | null] | null;

const SprintForm = () => {
  const MAX_DAYS = 3;

  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);
  const disabledDate = (current: Dayjs) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') >= MAX_DAYS;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') >= MAX_DAYS;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <>
      <CommonForm formCols={fullColumn}>
        <Form.Item
          name="project_date"
          label={<label style={{ color: 'white' }}>희망 스프린트 날짜</label>}
          style={{ color: 'red' }}
        >
          <RangePicker
            size="large"
            style={{ width: '100%' }}
            placeholder={['시작일', '종료일']}
            value={dates || value}
            disabledDate={disabledDate}
            onCalendarChange={(val) => setDates(val)}
            onChange={(val) => setValue(val)}
            onOpenChange={onOpenChange}
          />
        </Form.Item>

        <Form.Item label={<label style={{ color: 'white' }}>희망 직무</label>} name="apply_type">
          <Select placeholder="희망 직무를 선택해주세요." size="large">
            <Select.Option value="pm">기획자</Select.Option>
            <Select.Option value="designer">디자이너</Select.Option>
            <Select.Option value="frontend">프론트엔드</Select.Option>
            <Select.Option value="backend">백엔드</Select.Option>
            <Select.Option value="etc">기타</Select.Option>
          </Select>
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Form.Item label={<label style={{ color: 'white' }}>아이데이션</label>} name="ideation">
            <Radio.Group defaultValue="true" buttonStyle="solid">
              <Radio.Button value="true">유</Radio.Button>
              <Radio.Button value="false">무</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Button type="primary" style={{ display: 'inline-block' }} shape="round" size="large">
            등록하기
          </Button>
        </div>
      </CommonForm>
    </>
  );
};

export default SprintForm;
