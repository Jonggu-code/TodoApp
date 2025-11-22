import { ConfirmModalProps } from '../../../types/modal';

export default function ConfirmModal({
  text,
  onConfirm,
  onCancel,
  showAlert,
}: ConfirmModalProps) {
  const btnStyle = 'transition duration-100 py-3 px-4 rounded cursor-pointer';

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50">
      <div className="fixed top-[50%] left-[50%] translate-[-50%] border-4 border-lime-800 bg-lime-100 p-5  text-gray-700 rounded-2xl shadow-md text-center z-10">
        <p className="font-bold mb-5">" {text} "</p>
        <h2 className="font-bold mb-5 text-lime-800">정말 삭제할까요?</h2>
        <div className="flex justify-center mt-2 gap-2 text-white font-bold">
          <button
            className={`${btnStyle} bg-lime-600 hover:bg-lime-700`}
            onClick={() => {
              onConfirm();
              showAlert(`"${text}" 가 삭제되었습니다.`);
            }}
          >
            확인
          </button>
          <button
            className={`${btnStyle} bg-gray-400 hover:bg-gray-500`}
            onClick={onCancel}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
