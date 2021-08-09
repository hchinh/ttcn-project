import React from 'react';
import s from './Confirm.module.scss';

function Confirm({ close, deleteAllCart }) {
	return (
		<div className={s.body}>
			<div>
				<p className={s.text}>Bạn có muốn xoá tất cả ?</p>
			</div>
			<div className="d-flex">
				<button
					onClick={() => deleteAllCart()}
					className={`${s.button} ${s.button_active}`}
				>
					Yes
				</button>
				<button onClick={() => close(false)} className={s.button}>
					No
				</button>
			</div>
		</div>
	);
}

export default Confirm;
