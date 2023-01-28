import React, { FunctionComponent } from 'react';
import CommonForm from '@/components/CommonForm';
import { DatePicker, Divider, Form, Input, InputNumber } from 'antd';
import TextFormItem from './subComponents/TextFormItem';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import { fullColumn } from './meta';
const { TextArea } = Input;

interface IFundingFormProps {}

const { RangePicker } = DatePicker;
const dateTimeFormat = 'YYYY-MM-DD hh:mm:ss';

const adterToday: RangePickerProps['disabledDate'] = (current) => {
  return current && current <= dayjs().endOf('day');
};

const FundingForm: FunctionComponent<IFundingFormProps> = (props) => {
  return (
    <CommonForm formCols={fullColumn}>
      <Divider orientation="left">펀딩 계획을 입력해주세요</Divider>
      <Form.Item label="목표 금액" name="plan_money">
        <InputNumber addonAfter={'원'} defaultValue={100000} />
      </Form.Item>
      <Form.Item name={'funding_date'} label={'펀딩 기간'} extra={'최대 60일 제한'}>
        <RangePicker
          format={dateTimeFormat}
          showTime
          placeholder={['시작 일정', '종료 일정']}
          style={{ width: '100%' }}
          disabledDate={adterToday}
        />
      </Form.Item>
      <TextFormItem title={'후원자 결제 종료'} description={'종료일 다음 날부터 7일'} />
      <TextFormItem title={'정산일'} description={'후원자 결제 종료 다음 날부터 7영업일'} />
      <Form.Item name={'project_plan'} label={'프로젝트 게획을 입력해 주세요.'}>
        <TextArea rows={10} placeholder="프로젝트 게획에 대해 소개해주세요." size="large" />
      </Form.Item>
    </CommonForm>
  );
};

export default FundingForm;
