/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { KeysType } from '../common/common';

export interface TdCheckboxGroupProps<T = CheckboxGroupValue> {
  /**
   * 是否开启无边框模式
   * @default false
   */
  borderless?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 用来定义 value / label 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: KeysType;
  };
  /**
   * 支持最多选中的数量
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 统一设置内部复选框 HTML 属性
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<CheckboxOption>;
  };
  /**
   * 只读状态
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选中值
   * @default []
   */
  value?: {
    type: ArrayConstructor;
    value?: T;
  };
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: T;
  };
}

export type CheckboxOption = string | number | CheckboxOptionObj;

export interface CheckboxOptionObj {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  checkAll?: true;
}

export type CheckboxGroupValue = Array<string | number | boolean>;
