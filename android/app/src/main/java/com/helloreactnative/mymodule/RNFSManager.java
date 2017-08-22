package com.helloreactnative.mymodule;

import android.os.Environment;
import android.text.TextUtils;
import com.facebook.react.bridge.*;

import javax.annotation.Nullable;
import java.io.File;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by xiaokecong on 22/08/2017.
 */
public class RNFSManager extends ReactContextBaseJavaModule {
    private static final String E_LIST_FILES_EXCEPTION = "list_files_exception";
    private static final String E_FILE_NOT_EXIST = "file_not_exist";
    private static final String E_FILE_PATH_IS_NULL = "file_path_is_null";

    private static final String RNFSDCIMDirectoryPath = "RNFSDCIMDirectoryPath";

    public RNFSManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNFSManager";
    }

    @ReactMethod
    public void listFiles(String directoryPath, Promise promise) {
        try {
            File dir = new File(directoryPath);
            if (!dir.exists()) {
                promise.reject(E_FILE_NOT_EXIST, E_LIST_FILES_EXCEPTION);
            }

            File[] files = dir.listFiles();

            WritableArray fileMaps = Arguments.createArray();
            for (File childFile : files) {
                WritableMap fileMap = Arguments.createMap();
                fileMap.putDouble("mTime", (double) childFile.lastModified() / 1000); // 单位s，从1970-01-01：00：00：00
                fileMap.putString("name", childFile.getName());
                fileMap.putString("path", childFile.getAbsolutePath());
                fileMap.putInt("size", (int) childFile.length());
                fileMap.putInt("type", childFile.isDirectory() ? 1 : 0);

                fileMaps.pushMap(fileMap);
            }

            promise.resolve(fileMaps);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(E_LIST_FILES_EXCEPTION, e.getMessage());
        }
    }

    @ReactMethod
    public void getFileSizeStr(String filePath, Promise promise) {
        if (!TextUtils.isEmpty(filePath)) {
            File file = new File(filePath);
            if (file.exists()) {
                String sizeStr = "";
                DecimalFormat format = new DecimalFormat(".00");
                long size = file.length();
                if (size > 1024 * 1024) {
                    sizeStr = format.format(size / 1024 / 1024) + "MB";
                } else if (size > 1024) {
                    sizeStr = format.format(size / 1024) + "KB";
                } else {
                    sizeStr = format.format(size) + "B";
                }
                promise.resolve(sizeStr);
            } else {
                promise.reject(E_FILE_NOT_EXIST, E_FILE_NOT_EXIST);
            }
        } else {
            promise.reject(E_FILE_PATH_IS_NULL, E_FILE_PATH_IS_NULL);
        }
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(RNFSDCIMDirectoryPath,
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM).getAbsolutePath());
        return constants;
    }
}
