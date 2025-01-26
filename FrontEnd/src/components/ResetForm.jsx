import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { postReq } from "../../api/axios"
import { Form, Input, Button, Typography } from "antd";
import { useForm, Controller } from "react-hook-form";
import { postReq } from "../api/axios";
;
// import toast from "react-hot-toast";

const ResetForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { token } = useParams();
  // console.log(token)
  const onSubmit = async (data) => {
    const response = await postReq(`/auth/reset-password/${token}`, { ...data, token });
    if (response.status === 200) {
      navigate("/login");
    } else {
      alert("Failed to reset password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <Typography.Title level={3} className="text-center text-gray-800 mb-6">
          Reset Password
        </Typography.Title>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          {/* New Password Field */}
          <Form.Item
            label="New Password"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password ? errors.password.message : ""}
          >
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="••••••••"
                  className="rounded-lg"
                />
              )}
            />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            label="Confirm Password"
            validateStatus={errors.confirmPassword ? "error" : ""}
            help={errors.confirmPassword ? errors.confirmPassword.message : ""}
          >
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="••••••••"
                  className="rounded-lg"
                />
              )}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
    //     <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
    //       Reset Password
    //     </h2>
    //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    //       {/* New Password Field */}
    //       <div>
    //         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //           New Password
    //         </label>
    //         <input
    //           id="password"
    //           type="password"
    //           {...register("password", {
    //             required: "Password is required",
    //             minLength: {
    //               value: 6,
    //               message: "Password must be at least 6 characters",
    //             },
    //           })}
    //           className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
    //           placeholder="••••••••"
    //         />
    //         {errors.password && (
    //           <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
    //         )}
    //       </div>

    //       {/* Confirm Password Field */}
    //       <div>
    //         <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
    //           Confirm Password
    //         </label>
    //         <input
    //           id="confirmPassword"
    //           type="password"
    //           {...register("confirmPassword", {
    //             required: true
    //           })}
    //           className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
    //           placeholder="••••••••"
    //         />
    //         {errors.confirmPassword && (
    //           <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
    //         )}
    //       </div>

    //       {/* Submit Button */}
    //       <button
    //         type="submit"
    //         className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    //       >
    //         Reset Password
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default ResetForm;