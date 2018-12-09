import * as React from "react";

export interface RowProps { message: string; }

export const Row = (props: RowProps) => (<div>{ props.message }</div>);