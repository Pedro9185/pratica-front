'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../globalRedux/rootReducer';
import { decrement, increment } from '../globalRedux/modules/counter';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-300 container mx-auto h-full flex flex-col gap-4">
      <div>
        <Typography>{counter}</Typography>
        <Button onClick={() => dispatch(increment(1))}>Incrementar</Button>
        <Button onClick={() => dispatch(decrement(1))}>Decrementar</Button>
      </div>
      <Link href="/login">Login</Link>
    </div>
  );
}
